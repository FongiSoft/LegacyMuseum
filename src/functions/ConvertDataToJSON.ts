import type { ConvertedData } from "../Types/PurchaseData";

export default function convertPurchaseDataToJSON(data: DBData): ConvertedData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
    purchaseID: row[0] !== null ? row[0].toString() : "", // Aseguramos que no sea undefined
    warehouseID: row[2] as string,
    currencyID: row[3] as string,
    souvenirID: row[4] as string,
    souvenirName: row[6] as string,
    price: row[7] as string,
    supplierID: row[5] as string,
    supplierName: row[8] as string,
    streetName: row[9] as string,
    neighborhood: row[10] as string,
    outsideNumber: row[11] as string,
    postalCode: row[12] as string,
    country: row[13] as string,
    state: row[14] as string,
    city: row[15] as string,
    deliverTo: row[16] as string,
    recepcionDate: null,
    discount: row[17] as string,
    totalChange: row[18] as string,
    description: row[19] as string,
    status: (row[1] as string).toLowerCase()
    };
  });
}