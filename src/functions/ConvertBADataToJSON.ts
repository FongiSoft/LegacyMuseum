import type { ConvertedBankAccountData } from "@customTypes/BankAccountData";
// Define el tipo DBData que representa la estructura de datos obtenida de la base de datos

// Función para convertir los datos de la base de datos a formato JSON
export default function convertBankAccountDataToJSON(data: DBData): ConvertedBankAccountData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      bankAccountID: row[0] !== null ? row[0].toString() : "",
      bankID: row[1] !== null ? row[1].toString() : "",
      entityID: row[2] !== null ? row[2].toString() : "",
      entityType: row[3] ? (row[3] as string).toString() : "",
      currencyID: row[4] !== null ? row[4].toString() : "",
      accountTypeID: row[5] !== null ? row[5].toString() : "",
      customerID: row[6] !== null ? row[6].toString() : "",
      statusID: row[7] ? (row[7] as string).toString() : "",
      bicCode: row[8] !== null ? row[8].toString() : null,
    };
  });
};
