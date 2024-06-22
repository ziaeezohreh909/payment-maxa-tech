import { Box, Button, IconButton, Menu, Stack, Tooltip } from "@mui/material";
import React from "react";
import bag from "@/assets/images/navbar-icons/bag.png";
import { useAccessCookie, useGetCartItems } from "../../hooks";
import CartItem from "./cart-item";
import { ICartProducts } from "../../hooks/types";
import { fetchIdCookie } from "../../services";
import Link from "next/link";

export default function CartMenu() {
  const { data: hasAccess } = useAccessCookie();
  const userId = fetchIdCookie();
  const { data: cartItems } = useGetCartItems(userId);
  const [anchorElCart, setAnchorElCart] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenCartMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElCart(event.currentTarget);
  };
  const handleCloseCartMenu = () => {
    setAnchorElCart(null);
  };

  console.log(cartItems);

  return (
    <Box>
      {anchorElCart && (
        <Box
          sx={{
            position: "fixed",
            top: "117px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
          }}
          onClick={handleCloseCartMenu}
        />
      )}
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenCartMenu} sx={{ p: 0 }}>
          <Box component="img" src={bag.src} />
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: "73px" }}
        id="menu-appbar"
        anchorEl={anchorElCart}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElCart)}
        onClose={handleCloseCartMenu}
      >
        <Stack
          direction={"column"}
          justifyContent={"space-between"}
          sx={{
            width: "512px",
            maxHeight: "712px",
            padding: "24px",
            display: "flex",
          }}
        >
          {hasAccess ? (
            cartItems?.length > 0 ? (
              <Box>
                <Box sx={{ fontSize: "18px", mb: "24px" }}>
                  {cartItems?.length} Items
                </Box>
                <Stack
                  sx={{
                    width: "464px",
                    maxHeight: "565px",
                    pb: "18px",
                    overflowY: "auto",
                    "&::-webkit-scrollbar": {
                      width: "6px",
                    },
                    "&::-webkit-scrollbar-track": {
                      backgroundColor: "#f1f1f1",
                      borderRadius: "10px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "#888",
                      borderRadius: "10px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      backgroundColor: "#555",
                    },
                  }}
                  direction="column"
                  spacing={2}
                  justifyContent={"felx-start"}
                  alignItems={"center"}
                >
                  {cartItems &&
                    cartItems.map((item: ICartProducts) => (
                      <CartItem key={item.productId} cartItemProps={item} />
                    ))}
                </Stack>
                <Stack height={"48px"} direction={"row"} alignItems={"center"}>
                  <Stack direction={"column"} sx={{ mr: "32px" }}>
                    <Box sx={{ fontSize: "14px", fontWeight: "300" }}>
                      Grand total
                    </Box>
                    <Box>$557</Box>
                  </Stack>
                  <Stack>
                    <Link href="/cart">
                      <Button
                        sx={{
                          height: "100%",
                          flexGrow: "1",
                          backgroundColor: "#0C68F4",
                          color: "white",
                          textTransform: "none",
                          fontSize: "16px",
                          fontWeight: "300",
                          "&:hover": {
                            backgroundColor: "#005BB5",
                          },
                        }}
                      >
                        Proceed to Cart
                      </Button>
                    </Link>
                  </Stack>
                </Stack>
              </Box>
            ) : (
              <Box>Your cart is empty.</Box>
            )
          ) : (
            <Box> Please log in to see your cart items.</Box>
          )}
        </Stack>
      </Menu>
    </Box>
  );
}
