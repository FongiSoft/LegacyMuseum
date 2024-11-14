import type { ConvertedBankAccountData } from "@customTypes/BankAccountData";

export function convertBankAccountDataToJSON(data: DBData): ConvertedBankAccountData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      bankAccountID: Number(row[0]),               // ID de la cuenta bancaria
      bankName: row[1] as string,                  // Nombre del banco
      entityID: Number(row[2]),                    // ID de la entidad (cliente, proveedor, etc.)
      entityType: row[3] as string,                // Tipo de entidad (cliente, proveedor, etc.)
      currency: row[4] ? String(row[4]) : null,    // Moneda
      accountType: row[5] as string,               // Tipo de cuenta
      customerFullName: `${row[6]} ${row[7]} ${row[8]}`,  // Nombre completo del cliente
      status: String(row[9]).toLowerCase(),        // Estado de la cuenta en minúsculas
      bicCode: row[10] as string | null,           // Código BIC/SWIFT
    };
  });
};
