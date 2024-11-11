export type ReservationData = {
    reservationID: number;       // ID de la reserva
    customerID: number;          // ID del cliente
    quantity: number;            // Cantidad de boletos reservados
    paymentMethodID: number;     // ID del método de pago
    reservationDate: Date;       // Fecha de la reserva
    statusID: number;            // Estado de la reserva (1 = Confirmada, 2 = Cancelada, etc.)
    total: number;               // Total de la reserva en decimal
    status: number;
  }
  
  export interface ConvertedData {
    reservationID: string;       // Convertido a string
    customerID: string;          // Convertido a string
    quantity: number;            // Mantiene el tipo number
    paymentMethodID: string;     // Convertido a string
    reservationDate: string;     // Fecha en formato ISO string
    statusID: string;            // Convertido a string
    total: string;               // Convertido a string para mantener el formato decimal
    status : string;
  }
  

  