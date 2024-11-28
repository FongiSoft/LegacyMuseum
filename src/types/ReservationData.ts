export type ReservationData = {
    reservationID: number;       // ID de la reserva
    customerID: number;          // ID del cliente
    customerName: string; 
    quantity: number;            // Cantidad de boletos reservados
    paymentMethodID: number;     // ID del método de pago
    paymentMethod: string;
    reservationDate: Date;       // Fecha de la reserva
    statusID: number;            // Estado de la reserva (1 = Confirmada, 2 = Cancelada, etc.)
    total: number;               // Total de la reserva en decimal
    status: number;
  }
  
  export interface ConvertedData {
    reservationID: string;       // Convertido a string
    customerID: string;          // Convertido a string
    customerName: string;
    quantity: string;            // Mantiene el tipo number
    paymentMethod: string;     // Convertido a string
    reservationDate: string | null;     // Fecha en formato ISO string
    statusID: string;            // Convertido a string
    total: string | null;               // Convertido a string para mantener el formato decimal
    status : string | null;
  }
  


  