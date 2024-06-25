import GetPayment from "@/components/cart/components/getpayment/GetPayment";

export default function GetCheckOut(subtotal) {
  return (
    <>
      <GetPayment
        subtotal={subtotal}
        discount={discount}
        shipment={shipment}
        grandTotal={grandTotal}
      />
    </>
  );
}
