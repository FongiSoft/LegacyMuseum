import type { ConvertedBankAccountData } from "@customTypes/BankAccountData";

// Esta función convierte los datos de la base de datos en un formato adecuado para el frontend
export function convertBankAccountDataToJSON(data: DBData): ConvertedBankAccountData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      bankAccountID: Number(row[0]), 
      bankID: Number(row[1]), 
      entityID: Number(row[2]), 
      entityType: row[3] as string, 
      currencyID: Number(row[4]), 
      accountTypeID: Number(row[5]),
      statusID: Number(row[7]), 
      bicCode: row[8] ? (row[8] as string) : null,
      customerID: Number(row[6]),
      status: String(row[9])
    };
  });
}
