import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { paymentType } from "../../hooks/type";

export default function PaymentDetails({
  subtotal,
  discount,
  shipment,
  grandTotal,
}: paymentType) {
  return (
    <Card
      sx={{
        width: "416px",
        height: "267px",
      }}
    >
      <CardContent
        sx={{ margin: "10px", display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h6">Payment Details</Typography>
        <Stack direction={"row"} justifyContent="space-between">
          <Typography>Subtotal</Typography>
          <Typography>${subtotal.toFixed(2)}</Typography>
        </Stack>
        <Stack direction={"row"} justifyContent="space-between">
          <Typography>Discount</Typography>
          <Typography>${discount.toFixed(2)}</Typography>
        </Stack>
        <Stack direction={"row"} justifyContent="space-between">
          <Typography>Shipment Cost</Typography>
          <Typography>${shipment.toFixed(2)}</Typography>
        </Stack>
        <Box sx={{ borderBottom: "1px solid #CBCBCB", marginTop: "8px" }}></Box>
        <Stack direction={"row"} justifyContent="space-between">
          <Typography>Grand Total</Typography>
          <Typography>${grandTotal.toFixed(2)}</Typography>
        </Stack>
        <Button variant="contained" sx={{ mt: "25px", py: "12px" }}>
          Procced to checkout
        </Button>
      </CardContent>
    </Card>
  );
}
