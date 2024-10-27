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
  accountId: string;
  accessToken: string;
  fundingSourceUrl: string | undefined | null;
  sharableId: string;
};
