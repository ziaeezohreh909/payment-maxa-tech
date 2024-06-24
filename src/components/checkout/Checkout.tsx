import { Box, Button, TextField, Typography } from "@mui/material";
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
import { useGetCartItems } from "@/layout/navbar/hooks";
import { fetchIdCookie, getCartItemDetails } from "@/layout/navbar/services";
import CartItem from "@/layout/navbar/components/cart-menu/cart-item";
import { useEffect, useState } from "react";

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
  const [discountCodeInput, setDiscountCodeInput] = useState("");
  const discountCode = { A: "10", B: "20", C: "30" };

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
      <Stack direction={"row"} gap={"25px"}>
        <Stack>info user</Stack>
        <Stack direction={"column"}>
          <Typography variant="h5">Your Order</Typography>
          <Stack direction={"column"} mb={6}>
            {cartItems?.map((item: any) => (
              <CartItem
                key={item.productId}
                cartItemProps={item}
                // changeComponent="account"
              />
            ))}
          </Stack>
          <Stack direction={"row"} gap={"5px"}>
            <TextField
              placeholder="discount code"
              value={discountCodeInput}
              onChange={(e) => setDiscountCodeInput(e.target.value)}
            ></TextField>
            <Button variant="outlined" onClick={handelDiscountApply}>
              Apply
            </Button>
          </Stack>
          <Stack
            sx={{
              width: "416px",
              height: "267px",
            }}
          >
            <Stack
              direction={"row"}
              justifyContent="space-between"
              marginTop={"10px"}
            >
              <Typography>Subtotal</Typography>
              <Typography>${subtotal.toFixed(2)}</Typography>
            </Stack>
            <Stack direction={"row"} justifyContent="space-between">
              <Typography>Discount</Typography>
              <Typography>${discount.toFixed(2)}</Typography>
            </Stack>
            <Stack direction={"row"} justifyContent="space-between">
              <Typography>Shipment Cost</Typography>
              <Typography>${shipment}</Typography>
            </Stack>
            <Box
              sx={{ borderBottom: "1px solid #CBCBCB", marginTop: "8px" }}
            ></Box>
            <Stack direction={"row"} justifyContent="space-between">
              <Typography>Grand Total</Typography>
              <Typography>${grandTotal.toFixed(2)}</Typography>
            </Stack>
            {/* <Link href={"/checkout"}> */}
            <Button
              variant="contained"
              sx={{ mt: "25px", py: "12px" }}
              fullWidth
            >
              Continue to pay
            </Button>
            {/* </Link> */}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
