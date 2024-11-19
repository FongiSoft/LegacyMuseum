import type { ConvertedBankAccountData } from "@customTypes/BankAccountData";

// Esta función convierte los datos de la base de datos en un formato adecuado para el frontend
export function convertBankAccountDataToJSON(data: DBData): ConvertedBankAccountData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      bankAccountID: Number(row[0]), 
      bankID: Number(row[1]), 
      entityID: Number(row[2]), 
      entityType: row[3] as string, 
      currency: row[4] ? String(row[4]) : null, 
      accountType: row[5] as string, // Tipo de cuenta
      customerFullName: `${row[6] ?? ''} ${row[7] ?? ''} ${row[8] ?? ''}`.trim(), // Concatenación del nombre del cliente
      status: String(row[9]).toLowerCase(), 
      bicCode: row[10] ? (row[10] as string) : null, // El código BIC
    };
  });
}
