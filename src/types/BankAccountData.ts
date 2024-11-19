// BankAccountData.ts
export type BankAccountData = {
  bankAccountID: number;
  bankID: number;
  entityID: number;
  entityType: string;
  currencyID: number;
  accountTypeID: number;
  customerID: number;
  statusID: number;
  bicCode: string;
};
  
export type ConvertedBankAccountData = {
  bankAccountID: number;
  bankID: number;
  entityID: number;
  entityType: string;
  currency: string | null;
  accountType: string;
  customerFullName: string;
  status: string;
  bicCode: string | null;
};

