import type { ConvertedData } from "@customTypes/ReservationData";
import type { ConvertedCustomerData } from "@customTypes/CustomerData";

export default function convertReservationDataToJSON(data: DBData): ConvertedData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      reservationID: row[0] !== null ? row[0].toString() : "",        // Convierte a string
      customerID: row[1] !== null ? row[1].toString() : "",           // Convierte a string
      quantity: row[2] as number,                                     // Mantiene el tipo number
      paymentMethodID: row[3] !== null ? row[3].toString() : "",      // Convierte a string
      reservationDate: row[4] !== null ? new Date(row[4] as string).toISOString() : "", // Convierte a ISO string
      statusID: row[5] !== null ? row[5].toString() : "",             // Convierte a string
      total: row[6] !== null ? parseFloat(row[6] as string).toFixed(2) : "0.00", // Convertido a string con dos decimales
      status: String(row[7]).toLowerCase(),
      
    };
  });
}
export function convertCustomerDataToJSON(data: DBData): ConvertedCustomerData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      customerID: typeof row[6] === "number" ? row[6] : Number(row[0] ?? 0),
    };
  });
};