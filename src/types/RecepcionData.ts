export type RecepcionData = {
    receptionID: number;
    purchaseID: number;
    warehouseID: number;
    currencyname: string;
    souvenirID: number;
    souvenirName: string;
    price: number;
    supplierID: number;
    supplierEmail: string;
    streetName: string;
    neighborhood: string;
    outsideNumber: number;
    postalCode: string;
    country: string;
    state: string;
    city: string;
    deliverTo: string;
    recepcionDate: Date;
    discount: number;
    totalChange: number;
    description: string;
    statusName: string;
}

export interface ConvertedReceptionData {
    receptionID: number;
    purchaseID: string;
    warehouseID: string | null;
    currencyName: string | null;
    souvenirID: string | null;
    souvenirName: string;
    price: string | null;
    supplierID: string | null;
    supplierEmail: string;
    streetName: string;
    neighborhood: string;
    outsideNumber: string | null;
    postalCode: string;
    country: string;
    state: string;
    city: string;
    deliverTo: string;
    recepcionDate: Date;
    discount: string | null;
    totalChange: string | null;
    description: string;
    statusName: string;
    bankAccID: string;
}