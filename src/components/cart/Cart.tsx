import { Box, Stack, Typography } from "@mui/material";
import Card from "../shared/card/components";
import { useGetProduct } from "./hooks";
import { useGetCartItems } from "@/layout/navbar/hooks";
import { fetchIdCookie } from "@/layout/navbar/services";
import CartItem from "@/layout/navbar/components/cart-menu/cart-item";
import PaymentDetails from "./components/paymentDetails/PaymentDetails";
import { useEffect, useState } from "react";

export default function Cart() {
  const { data: randomProducts } = useGetProduct();
  const userId = fetchIdCookie();
  const { data: cartItems } = useGetCartItems(userId);

  const { subtotal, setSubtotal } = useState();
  const { discount, setDiscount } = useState();
  const { grandTotal, setGranTotal } = useState();

  useEffect(() => {
    setSubtotal((  )=>cartItems?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0);
    setDiscount(()=>cartItems?.reduce(
      (acc, item) => acc + (item.discount || 0) * item.quantity,
      0
    ) || 0);
    
  }, [subtotal, discount]);

  // const subtotal =
  //   cartItems?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;
  // const discount =
  //   cartItems?.reduce(
  //     (acc, item) => acc + (item.discount || 0) * item.quantity,
  //     0
  //   ) || 0;
  const shipment = 22.5;
  const grandTotal = subtotal - discount + shipment;

  return (
    <Box>
      <Box></Box>
      <Stack direction={"column"}>
        <Stack direction={"row"}>
          <Stack direction={"column"}>
            {cartItems?.map((item: any) => (
              <CartItem key={item.productId} cartItemProps={item} />
            ))}
          </Stack>
          <Stack>
            <PaymentDetails
              subtotal={subtotal}
              discount={discount}
              shipment={shipment}
              grandTotal={grandTotal}
            />
          </Stack>
        </Stack>
        <Stack direction={"column"}>
          <Typography>
            Customers who viewed items in your browsing history also viewed
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {randomProducts?.map((item) => (
              <Card
                // key={item.productId}
                cardProps={item}
                hoverMode={{ hoverMode: "productHover" }}
              />
            ))}
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
