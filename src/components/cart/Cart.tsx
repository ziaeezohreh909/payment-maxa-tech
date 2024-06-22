import { Box, Stack, Typography } from "@mui/material";
import Card from "../shared/card/components";
import { useGetProduct } from "./hooks";
import { useGetCartItems } from "@/layout/navbar/hooks";
import { fetchIdCookie } from "@/layout/navbar/services";
import CartItem from "@/layout/navbar/components/cart-menu/cart-item";

export default function Cart() {
  const { data: randomProducts } = useGetProduct();
  const userId = fetchIdCookie();
  const { data: cartItems } = useGetCartItems(userId);

  return (
    <Box>
      <Box></Box>
      <Stack direction={"column"}>
        <Stack>
          <Stack direction={"column"}>
            {cartItems?.map((item:any) => (
              <CartItem cartItemProps={item} />
            ))}
          </Stack>
          <Stack>cartpayment</Stack>
        </Stack>
        <Stack direction={"column"}>
          <Typography>
            Customers who viewed items in your browsing history also viewed
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {randomProducts?.map((item) => (
              <Card
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
