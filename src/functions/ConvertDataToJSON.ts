import type { ConvertedData } from "@customTypes/ReservationData";
import type { ConvertedCustomerData } from "@customTypes/CustomerData";
import type { ConvertedStatus } from "@customTypes/StatusData";
import type { ConvertedPaymentMethod } from "@customTypes/PaymentMethodData";

export default function convertReservationDataToJSON(data: DBData): ConvertedData[] {
  return data.rows.map((row, index) => {
    const [
      reservationID,
      customerID,
      firstName,
      paternalLastName,
      maternalLastName,
      quantity,
      paymentMethodID,
      reservationDate,
      status,
      statusID,
      total
    ] = row;

    // Build customer name from individual components
    const customerName = [firstName, paternalLastName, maternalLastName]
      .filter(Boolean)
      .join(' ');

    return {
      order: index + 1,
      reservationID: String(reservationID || ''),
      customerID: String(customerID || ''),
      customerName: customerName,
      quantity: String(quantity || '0'),
      paymentMethod: String(paymentMethodID || ''),
      reservationDate: reservationDate 
        ? new Date(reservationDate as string).toISOString().split('T')[0]
        : null,
      status: String(status || ''),
      statusID: String(statusID || ''),
      total: total 
        ? parseFloat(String(total)).toFixed(2) 
        : null
    };
  });
}
export function convertCustomerDataToJSON(data: DBData): ConvertedCustomerData[] {
  return data.rows.map((row) => {
    // Asegúrate de que los índices de `row` sean correctos.
    const customerID = Number(row[0] ?? 0); // row[0]: customerID
    const customerName = String(row[1] ?? ''); // row[1]: customerName

    return {
      customerID,
      customerName,
    };
  });
}

export function convertStatusDataToJSON(data: DBData): ConvertedStatus[]{
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      statusID: Number(row[0]),
      statusName: row[1] as string,    
    };
  });
};

// Función para convertir los datos de PaymentMethods
export function convertPaymentMethodDataToJSON(data: DBData): ConvertedPaymentMethod[] {
  return data.rows.map((row: (string | number | null)[]) => {
    const paymentMethodID = Number(row[0] ?? 0); // ID del método de pago
    const paymentMethodName = String(row[1] ?? ''); // Nombre del método de pago

    return {
      paymentMethodID,
      paymentMethodName,
    };
  });
}