import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import { fetchIdCookie, getCartItemDetails } from "@/layout/navbar/services";
import { useGetCartItems } from "@/layout/navbar/hooks";
import CartItem from "@/components/shared/cart-item/CartItem";
import { useEffect, useState } from "react";
import Payment from "@/components/cart/components/payment/Payment";
import Link from "next/link";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#0C68F4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#0C68F4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 48,
  height: 48,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "white",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    width: 72,
    height: 72,
    border: "3px solid #0C68F4",
    transform: "translateY(-15%)",
  }),
  ...(ownerState.completed && {
    backgroundColor: "#78ABF9",
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <LocalMallOutlinedIcon sx={{ fontSize: "32px" }} />,
    2: (
      <LocalShippingOutlinedIcon sx={{ fontSize: "48px", color: "#0C68F4" }} />
    ),
    3: <PaymentOutlinedIcon sx={{ fontSize: "32px" }} />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}
const steps = ["Cart", "Checkout", "Payment"];

export default function Checkout() {
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

  const [discountCodeInput, setDiscountCodeInput] = useState("");
  const discountCode = { Bronze: "10", Silver: "20", Gold: "30" };

  const handelDiscountApply = () => {
    const discountValue = discountCode[discountCodeInput];
    if (discountValue) {
      const discountPercent = parseInt(discountValue);
      console.log(discountPercent);
      const discountAmount = (subtotal * discountPercent) / 100;
      console.log(discountAmount);
      setGrandTotal(subtotal - discountAmount + shipment);
      console.log(setGrandTotal);
    }
  };

  return (
    <Box>
      <Box
        marginY={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Stack sx={{ width: "50%" }} spacing={4}>
          <Stepper
            alternativeLabel
            activeStep={1}
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  <Typography
                    sx={{
                      color:
                        label === "Checkout" && "Cart" ? "#0C68F4" : "#9E9E9E",
                      fontSize: label === "Checkout" ? "16px" : "14px",
                      fontWeight: label === "Checkout" ? "normal" : "medium",
                      mt: label === "Checkout" ? -2 : -1,
                    }}
                  >
                    {label}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Stack>
      </Box>
      <Stack direction={"row"} gap="45px">
        <Stack width={"624px"} height={"555px"}>
          <Paper>shipment</Paper>
        </Stack>
        <Stack marginBottom={"45px"} width={"100%"}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              padding: "24px",
            }}
          >
            <Typography variant="h6">Your Order</Typography>
            <Stack direction={"column"} gap={"10px"}>
              {cartItems?.map((item: any) => (
                <Box key={item.productId}>
                  <CartItem cartItemProps={item} changeComponent="account" />
                </Box>
              ))}
            </Stack>
            <Stack direction={"row"} gap={"5px"} width={"97%"}>
              <TextField
                placeholder="discount code"
                value={discountCodeInput}
                onChange={(e) => setDiscountCodeInput(e.target.value)}
                fullWidth
              ></TextField>
              <Button
                variant="outlined"
                onClick={handelDiscountApply}
                sx={{ width: "133px" }}
              >
                Apply
              </Button>
            </Stack>
            <Stack width={"97%"}>
              <Payment
                subtotal={subtotal}
                discount={discount}
                shipment={shipment}
                grandTotal={grandTotal}
              />
            </Stack>
            <Stack>
              {/* <Link href={"/checkout"}> */}
              <Button
                variant="contained"
                sx={{
                  mt: "25px",
                  py: "12px",
                  textTransform: "none",
                  width: "97%",
                }}
              >
                Continue to pay
              </Button>
              {/* </Link> */}
            </Stack>
          </Paper>
        </Stack>
      </Stack>
    </Box>
  );
}
