// Tipo base para los datos de la cuenta bancaria
export type BankAccountData = {
  bankAccountID: number;        // Identificador de la cuenta bancaria
  bankID: number;               // ID del banco
  entityID: number;             // ID de la entidad asociada (cliente, proveedor, empleado)
  entityType: 'customer' | 'supplier' | 'employee';  // Tipo de entidad
  currencyID: number;           // ID de la moneda
  accountTypeID: number;        // ID del tipo de cuenta
  customerID: number;           // ID del cliente
  statusID: number;             // Estado de la cuenta (ID de la tabla Status)
  bicCode: string | null;       // Código BIC/SWIFT del banco (opcional)
};

// Interfaz para los datos convertidos y listos para ser presentados en la pantalla
export interface ConvertedBankAccountData {
  bankAccountID: number;
  bankName: string;             // Nombre del banco
  entityID: number;
  entityType: 'customer' | 'supplier' | 'employee'; // Tipo de entidad
  currency: string;             // Nombre de la moneda
  accountType: string;          // Nombre del tipo de cuenta
  customerID: number;
  status: string;               // Descripción del estado de la cuenta
  bicCode: string | null;
}

// Función para convertir los datos crudos (BankAccountData) a datos legibles (ConvertedBankAccountData)
export function convertBankAccountData(
  bankAccount: BankAccountData,
  bankName: string,
  currencyName: string,
  accountTypeName: string,
  statusDescription: string
): ConvertedBankAccountData {
  return {
    bankAccountID: bankAccount.bankAccountID,
    bankName: bankName,
    entityID: bankAccount.entityID,
    entityType: bankAccount.entityType,
    currency: currencyName,
    accountType: accountTypeName,
    customerID: bankAccount.customerID,
    status: statusDescription,
    bicCode: bankAccount.bicCode,
  };
}

export type BankData = {
  bankID: number;
  bankName: string;
  addressID: number;
  bankCode: string;
  phoneNumb: string;
  email: string;
  statusID: number;
};

export type CurrencyData = {
  currencyID: number;
  currencyName: string;
  exchangeRate: number;
  description: string;
};