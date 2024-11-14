// Definición del tipo de datos para BankAccounts basado en la estructura de la tabla
export type BankAccountData = {
  bankAccountID: number;      // Identificador único para la cuenta bancaria
  bankID: number;             // Identificador del banco (FK a Banks)
  entityID: number;           // ID de la entidad asociada (cliente, proveedor, empleado)
  entityType: 'customer' | 'supplier' | 'employee';  // Tipo de entidad
  currencyID: number;         // Identificador de la divisa (FK a Currencies)
  accountTypeID: number;      // Tipo de cuenta (FK a AccountTypes)
  customerID: number;         // ID del cliente (FK a Customers)
  statusID: number;           // Estado de la cuenta (FK a Status)
  bicCode: string | null;     // Código BIC/SWIFT del banco
};

// Interfaz para los datos convertidos que facilitarán el manejo y presentación de datos en el frontend
export interface ConvertedBankAccountData {
  bankAccountID: number;
  bankName: string;           // Nombre del banco (relación con Banks)
  entityID: number;
  entityType: string;
  currency: string | null;    // Nombre de la divisa
  accountType: string;        // Tipo de cuenta (Ahorro, Cheques, etc.)
  customerFullName: string;   // Nombre completo del cliente
  status: string;             // Estado de la cuenta (Activa, Inactiva, etc.)
  bicCode: string | null;
}
