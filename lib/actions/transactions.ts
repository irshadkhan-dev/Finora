"use server";

import { plaidClient } from "../plaid";
import { createAdminClient } from "../server/appwrite";

export const getTransactionsByBankId = async ({
  bankId,
}: getTransactionsByBankIdProps) => {
  try {
    const { database } = await createAdminClient();
  } catch (error) {
    console.log(error);
  }
};
