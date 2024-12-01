function convertReservationDataToJSON(data: any): any {
  // Lógica para convertir los datos
  return data.map((item: any) => ({
    reservationID: item.reservationID.toString(),
    customerID: item.customerID.toString(),
    quantity: item.quantity,
    paymentMethodID: item.paymentMethodID.toString(),
    reservationDate: new Date(item.reservationDate).toISOString(),
    statusID: item.statusID.toString(),
    total: item.total.toFixed(2),
    status: item.status.toString(),
  }));
}

export default convertReservationDataToJSON;