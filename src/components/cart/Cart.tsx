import {
  Box,
  Stack,
  Step,
  StepConnector,
  StepIconProps,
  StepLabel,
  Stepper,
  Typography,
  stepConnectorClasses,
  styled,
} from "@mui/material";
import Card from "../shared/card/components";
import { useGetProduct } from "./hooks";
import { useGetCartItemDetails, useGetCartItems } from "@/layout/navbar/hooks";
import { fetchIdCookie, getCartItemDetails } from "@/layout/navbar/services";
import CartItem from "@/layout/navbar/components/cart-menu/cart-item";
import PaymentDetails from "./components/paymentDetails/PaymentDetails";
import { useEffect, useState } from "react";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
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
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#9E9E9E",
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
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <LocalMallOutlinedIcon sx={{ color: "#0C68F4", fontSize: "48px" }} />,
    2: <LocalShippingOutlinedIcon sx={{ fontSize: "32px" }} />,
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
      <Box
        marginY={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Stack sx={{ width: "50%" }} spacing={4}>
          <Stepper
            alternativeLabel
            activeStep={0}
            connector={<ColorlibConnector />}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  <Typography
                    sx={{
                      color: label === "Cart" ? "#0C68F4" : "#9E9E9E",
                      fontSize: label === "Cart" ? "16px" : "14px",
                      fontWeight: label === "Cart" ? "normal" : "medium",
                      mt: label === "Cart" ? -2 : -1,
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
      <Stack direction={"column"}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"column"} mb={6}>
            {cartItems?.map((item: any) => (
              <CartItem
                key={item.productId}
                cartItemProps={item}
                changeComponent="account"
              />
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
          <Typography fontSize={"20px"} fontWeight={"500"}>
            Customers who viewed items in your browsing history also viewed
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }} marginY={6}>
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
