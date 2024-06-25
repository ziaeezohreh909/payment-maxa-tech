export interface paymentType {
  subtotal: number;
  discount: number;
  shipment: number;
  grandTotal: number;
}

export interface discountCodeType {
  Bronze: string;
  Silver: string;
  Gold: string;
}
