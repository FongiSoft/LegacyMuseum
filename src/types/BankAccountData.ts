// BankAccountData.ts
export interface BankAccount {
  bankAccountID: number;
  bankID: number;
  entityID: number;
  entityType: "customer" | "supplier" | "employee";
  currencyID: number;
  accountTypeID: number;
  statusID: number;
  bicCode: string;
  customerID: number;
  status: number;           // Nombre del estado
}
  
export type ConvertedBankAccountData = {
  bankAccountID: number;
  bankID: number;
  entityID: number;
  entityType: string;
  currencyID: number;
  accountTypeID: number;
  statusID: number;
  bicCode: string | null;
  customerID: number;
  status: string;
};

