import type { ConvertedReceptionData } from "@customTypes/RecepcionData";
import type { ConvertedData } from "@customTypes/VipCardData";
import type { ConvertedCustomerData } from "@customTypes/CustomersData";

export default function convertReceptionDataToJSON(data: DBData): ConvertedReceptionData[] {
  return data.rows.map((row: (string | number | null | Date)[]) => {
    return {
    receptionID: row[0] ? Number(row[0]) : 0, // Aseguramos que no sea undefined
    purchaseID: row[1] as string, // Aseguramos que no sea undefined

    deliverTo: row[17] as string,
    recepcionDate: row[18] as Date,
    discount: row[19] as string,
    totalChange: row[20] as string,
    description: row[21] as string,
    
    warehouseID: row[2] as string,
    currencyName: row[3] as string,
    souvenirID: row[4] as string,
    supplierID: row[7] as string,
    

    souvenirName: row[5] as string,
    price: row[6] as string,

    supplierEmail: row[8] as string,

    streetName: row[10] as string,
    neighborhood: row[11] as string,
    outsideNumber: row[12] as string,
    postalCode: row[13] as string,
    country: row[14] as string,
    state: row[15] as string,
    city: row[16] as string,

    statusID: row[22] as string,
    bankAccID: row[23] as string, 
    statusName: String(row[9]).toLowerCase()
    
    };
  });
}

export function convertVIPcardDataToJSON(data: DBData): ConvertedData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      customerID: Number(row[15]), // Aseguramos que sea número
      cardNumber: Number(row[0]), // Convertimos a número
      email: row[7] as string,
      accountNumber: row[15] ? Number(row[15]) : 0, // Aseguramos que sea número
      accountType: String(row[10]), // Convertimos a string
      currency: row[13] ? String(row[13]) : null,
      bicCode: row[11] as string | null,
      name: row[1] as string,
      paternalSurname: row[2] as string,
      maternalSurname: row[3] as string,
      rfc: row[5] as string,
      phone: Number(row[6]), // Convertimos a número
      address: String(row[8]), // Convertimos a string
      status: String(row[14]).toLowerCase(), // Convertimos a string
    };
  });
};

export function convertCustomersDataToJSON(data: DBData): ConvertedCustomerData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      customerID: typeof row[6] === "number" ? row[6] : Number(row[0] ?? 0),
    };
  });
};
