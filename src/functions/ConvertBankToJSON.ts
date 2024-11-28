import type { ConvertedBankAccData } from "@customTypes/BankAccData";

export function convertBankAccDataToJSON(data: DBData): ConvertedBankAccData[] {
    return data.rows.map((row: (string | number | null)[]) => {
      return {
        bankAcc: typeof row[1] === "number" ? row[1] : Number(row[0] ?? 0),
      };
    });
  };