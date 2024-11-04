declare interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

declare type SignUpProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address1: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  city: string;
  ssn: string;
};

declare type User = {
  $id: string;
  email: string;
  userId: string;
  dwollaCustomerId: string;
  dwollaCustomerUrl: string;
  firstName: string;
  lastName: string;
  name: string;
  address1: string;
  city: string;
  ssn: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
};

declare type SignInProps = {
  email: string;
  password: string;
};

declare type PlaidLinkProps = {
  user: User;
  variant: string;
};

declare type PublicTokenExchangeProps = {
  user: User;
  public_token: string;
};

declare type FundingSourceProps = {
  customerId: string;
  processorToken: string;
  bankName: string;
};

declare interface CreateFundingSourceOptions {
  customerId: string; // Dwolla Customer ID
  fundingSourceName: string; // Dwolla Funding Source Name
  plaidToken: string; // Plaid Account Processor Token
  _links: object; // Dwolla On Demand Authorization Link
}

declare type NewDwollaCustomerParams = {
  firstName: string;
  lastName: string;
  email: string;
  type: string;
  address1: string;
  city: string;
  ssn: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
};

declare type TransferParams = {
  sourceFundingSourceUrl: string;
  destinationFundingSourceUrl: string;
  amount: string;
};

declare type AddFundingSourceParams = {
  dwollaCustomerId: string;
  processorToken: string;
  bankName: string;
};

declare type BankAccountProps = {
  userId: string;
  bankId: string;
  accountID: string;
  accessToken: string;
  fundingSourceUrl: string | undefined | null;
  sharableId: string;
};

declare type getBanksProp = {
  userId: string;
};

declare type getBankProp = {
  documentId: string;
};

declare interface getAccountsProps {
  userId: string;
}

declare type Bank = {
  $id: string;
  accountId: string;
  bankId: string;
  accessToken: string;
  fundingSourceUrl: string;
  userId: string;
  sharableId: string;
};

declare interface getInstitutionProps {
  institutionId: string;
}

declare type getAccountProp = {
  appwriteItemId: string;
};

declare interface getTransactionsProps {
  accessToken: string;
}

declare type Transaction = {
  id: string;
  $id: string;
  name: string;
  paymentChannel: string;
  type: string;
  accountId: string;
  amount: number;
  pending: boolean;
  category: string;
  date: string;
  image: string;
  type: string;
  $createdAt: string;
  channel: string;
  senderBankId: string;
  receiverBankId: string;
};

declare interface TransactionTableProps {
  transactions: Transaction[];
}

declare interface CreateTransactionProps {
  name: string;
  amount: string;
  senderId: string;
  senderBankId: string;
  receiverId: string;
  receiverBankId: string;
  email: string;
}

declare interface getTransactionsByBankIdProps {
  bankId: string;
}

declare interface ChartProps {
  accounts: string;
  totalBanks: string;
  totalCurrentBalance: string;
}

declare interface SearchParamsProps {
  searchParams: {
    id: string;
    page: string;
  };
}

declare interface getUserInfoProps {
  userId: string;
}

declare type Account = {
  id: string;
  availableBalance: number;
  currentBalance: number;
  officialName: string;
  mask: string;
  institutionId: string;
  name: string;
  type: string;
  subtype: string;
  appwriteItemId: string;
  shareableId: string;
};

declare interface BankItemTabProps {
  account: Account;
  appwriteItemId: string;
}

declare interface BankInfoProps {
  account: Account;
  appwriteItemId?: string;
  type: "full" | "card";
}

declare type AccountTypes =
  | "depository"
  | "credit"
  | "loan "
  | "investment"
  | "other";

declare interface RightSidebarProps {
  user: User;
  transactions: Transaction[];
  banks: Bank[] & Account[];
}

declare interface CreditCardProps {
  account: Account;
  userName: string;
  showBalance?: boolean;
}
