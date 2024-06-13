import { Box, Typography } from "@mui/material";
import Tech from "@/assets/images/footer-icons/tech.svg";
import Guarantee from "@/assets/images/footer-icons/guarantee.svg";
import Send from "@/assets/images/footer-icons/Frame 26086041.svg";
import Time from "@/assets/images/footer-icons/icon.svg";

export default function OurServices() {
  return (
    <Box
      height={"100px"}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box display="flex" alignItems="center" gap={2}>
        <Box component="img" src={Tech.src} />
        <Typography>Latest and Greatest Tech</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={2}>
        <Box component="img" src={Guarantee.src} />
        <Typography>Guarantee</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={2}>
        <Box component="img" src={Send.src} />
        <Typography>Free Shipping over 1000$</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={2}>
        <Box component="img" src={Time.src} />
        <Typography>24/7 Support</Typography>
      </Box>
    </Box>
  );
}
