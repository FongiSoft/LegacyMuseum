import type { BankData, CurrencyData } from "@customTypes/BankAccountData";


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
  entityType: string;
  currency: string;             // Nombre de la moneda
  accountType: string;          // Nombre del tipo de cuenta
  customerID: number;
  status: string;               // Descripción del estado de la cuenta
  bicCode: string | null;
}

// Tipo para representar datos provenientes de la base de datos
type DBData = {
  rows: Array<(string | number | null)[]>;
};

// Función para convertir datos de BankAccounts a JSON
export function convertBankAccountDataToJSON(data: DBData): BankAccountData[] {
  return data.rows.map((row) => {
    return {
      bankAccountID: Number(row[0]), // ID de cuenta bancaria
      bankID: Number(row[1]), // ID del banco
      entityID: Number(row[2]), // ID de la entidad
      entityType: row[3] as 'customer' | 'supplier' | 'employee', // Tipo de entidad
      currencyID: Number(row[4]), // ID de la divisa
      accountTypeID: Number(row[5]), // Tipo de cuenta
      customerID: Number(row[6]), // ID del cliente
      statusID: Number(row[7]), // Estado de la cuenta
      bicCode: row[8] as string | null // Código BIC
    };
  });
}

// Función para convertir datos de Banks a JSON
export function convertBanksDataToJSON(data: DBData): BankData[] {
  return data.rows.map((row) => {
    return {
      bankID: Number(row[0]), // ID del banco
      bankName: row[1] as string, // Nombre del banco
      addressID: Number(row[2]), // ID de la dirección
      bankCode: row[3] as string, // Código del banco
      phoneNumb: row[4] as string, // Número de teléfono
      email: row[5] as string, // Correo electrónico
      statusID: Number(row[6]) // Estado del banco
    };
  });
}

// Función para convertir datos de Currencies a JSON
export function convertCurrenciesDataToJSON(data: DBData): CurrencyData[] {
  return data.rows.map((row) => {
    return {
      currencyID: Number(row[0]), // ID de la divisa
      currencyName: row[1] as string, // Nombre de la divisa
      exchangeRate: Number(row[2]), // Tipo de cambio
      description: row[3] as string // Descripción de la divisa
    };
  });
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
