"use server";

import { CountryCode } from "plaid";
import { getBank, getBanks } from ".";
import { plaidClient } from "../plaid";
import { parseStringify } from "../utils";

export const getAccounts = async ({ userId }: getAccountsProps) => {
  try {
    const banks = await getBanks({ userId });

    const accounts = await Promise.all(
      banks?.map(async (bank: Bank) => {
        const accountResponse = await plaidClient.accountsGet({
          access_token: bank.accessToken,
        });
        const accountData = accountResponse.data.accounts[0];

        const institution = await getInstitution({
          institutionId: accountResponse.data.item.institution_id!,
        });

        const account = {
          id: accountData.account_id,
          availableBalance: accountData.balances.available!,
          currentBalance: accountData.balances.current!,
          institutionId: institution.institution_id,
          name: accountData.name,
          officialName: accountData.official_name,
          mask: accountData.mask!,
          type: accountData.type as string,
          subtype: accountData.subtype as string,
          appwriteItemId: bank.$id,
          sharableId: bank.sharableId,
        };

        return account;
      })
    );

    const totalBanks = accounts.length;
    const totalCurrentBalance = accounts.reduce((total, account) => {
      return total + account.currentBalance;
    }, 0);

    return parseStringify({ data: accounts, totalBanks, totalCurrentBalance });
  } catch (error) {
    console.log(error);
  }
};

export const getAccount = async ({ appwriteItemId }: getAccountProp) => {
  try {
    const bank = await getBank({ documentId: appwriteItemId });

    const accountResponse = await plaidClient.accountsGet({
      access_token: bank.accessToken,
    });

    const accountData = accountResponse.data.accounts[0];

    // const transferTransactionsData = await getTransactionsByBankId({
    //   bankId: bank.$id,
    // });

    // const transferTransactions = transferTransactionsData.documents.map(
    //   (transferData: Transaction) => ({
    //     id: transferData.$id,
    //     name: transferData.name!,
    //     amount: transferData.amount!,
    //     date: transferData.$createdAt,
    //     paymentChannel: transferData.channel,
    //     category: transferData.category,
    //     type: transferData.senderBankId === bank.$id ? "debit" : "credit",
    //   })
    // );

    // get institution info from plaid
    const institution = await getInstitution({
      institutionId: accountResponse.data.item.institution_id!,
    });

    const transactions = await getTransactions({
      accessToken: bank?.accessToken,
    });

    const account = {
      id: accountData.account_id,
      availableBalance: accountData.balances.available!,
      currentBalance: accountData.balances.current!,
      institutionId: institution.institution_id,
      name: accountData.name,
      officialName: accountData.official_name,
      mask: accountData.mask!,
      type: accountData.type as string,
      subtype: accountData.subtype! as string,
      appwriteItemId: bank.$id,
    };

    // const allTransactions = [...transactions, ...transferTransactions].sort(
    //   (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    // );

    return parseStringify({
      data: account,
      transactions: transactions,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getInstitution = async ({
  institutionId,
}: getInstitutionProps) => {
  try {
    const institutionResponse = await plaidClient.institutionsGetById({
      institution_id: institutionId,
      country_codes: ["US"] as CountryCode[],
    });

    const institution = institutionResponse.data.institution;

    return parseStringify(institution);
  } catch (error) {
    console.log("An error occured while getting the user", error);
  }
};

export const getTransactions = async ({
  accessToken,
}: getTransactionsProps) => {
  let hasMore = true;
  let transactions: any = [];
  try {
    while (hasMore) {
      const response = await plaidClient.transactionsSync({
        access_token: accessToken,
      });

      const data = response.data;

      transactions = response.data.added.map((transaction) => ({
        id: transaction.transaction_id,
        name: transaction.name,
        paymentChannel: transaction.payment_channel,
        type: transaction.payment_channel,
        accountId: transaction.account_id,
        amount: transaction.amount,
        pending: transaction.pending,
        category: transaction.category ? transaction.category[0] : "",
        date: transaction.date,
        image: transaction.logo_url,
      }));

      hasMore = data.has_more;
    }

    return parseStringify(transactions);
  } catch (error) {
    console.error("An error occurred while getting the accounts:", error);
  }
};
