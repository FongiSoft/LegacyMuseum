export type BankAccountData = {
    bankAccountID: number;          // ID de cuenta bancaria
    bankID: number;                 // ID del banco
    entityID: number;               // ID de la entidad (cliente, proveedor, empleado)
    entityType: 'customer' | 'supplier' | 'employee'; // Tipo de entidad (customer, supplier, employee)
    currencyID: number;             // ID de la moneda (referencia a Currencies)
    accountTypeID: number;          // ID del tipo de cuenta (referencia a AccountTypes)
    customerID: number;             // ID del cliente (referencia a Customers)
    statusID: number;               // ID del estado (referencia a Status)
    bicCode: string | null;         // Código BIC/SWIFT del banco
  };
  
  export interface ConvertedBankAccountData {
    bankAccountID: string;          // Aseguramos que sea un string para facilitar el manejo de datos en la interfaz
    bankID: string;
    entityID: string;
    entityType: string;             // 'customer', 'supplier' o 'employee'
    currencyID: string | null;
    accountTypeID: string;
    customerID: string;
    statusID: string;
    bicCode: string | null;
  }