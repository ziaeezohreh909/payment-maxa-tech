import { Box, Stack, Typography } from "@mui/material";
import Card from "../shared/card/components";
import { useGetProduct } from "./hooks";
import { useGetCartItemDetails, useGetCartItems } from "@/layout/navbar/hooks";
import { fetchIdCookie, getCartItemDetails } from "@/layout/navbar/services";
import CartItem from "@/layout/navbar/components/cart-menu/cart-item";
import PaymentDetails from "./components/paymentDetails/PaymentDetails";
import { useEffect, useState } from "react";

export default function Cart() {
  const { data: randomProducts } = useGetProduct();
  const userId = fetchIdCookie();
  const { data: cartItems } = useGetCartItems(userId);

  const shipment = 22.5;
  const [subtotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    let newSubtotal = 0;
    let newDiscount = 0;
    let newGrandTotal = 0;
    cartItems?.map((item: any) => {
      getCartItemDetails(item.productId).then((productDetail) => {
        newDiscount +=
          (productDetail.discount.percent * productDetail.price) / 100;
        newSubtotal += productDetail.price;
        setSubTotal(newSubtotal);
        setDiscount(newDiscount);
        newGrandTotal = newSubtotal - newDiscount + shipment;
        setGrandTotal(newGrandTotal);
      });
    });
  }, [cartItems]);

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
            {randomProducts?.map((item, index) => (
              <Card
                key={index}
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
