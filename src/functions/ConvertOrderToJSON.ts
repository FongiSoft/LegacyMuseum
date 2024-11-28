import type { ConvertedPurchaseData } from "@customTypes/PurchaseData";

export function convertPurchaseDataToJSON(data: DBData): ConvertedPurchaseData[] {
    return data.rows.map((row: (string | number | null)[]) => {
      return {
        purchaseID: typeof row[1] === "number" ? row[1] : Number(row[0] ?? 0),
      };
    });
  };