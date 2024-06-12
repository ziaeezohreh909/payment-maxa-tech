import { Box, Container, Stack } from "@mui/material";
import banner1 from "@/assets/images/amazing-discount-images/Frame 26086873.png";
import banner2 from "@/assets/images/amazing-discount-images/Banner.png";
import Image from "next/image";

export default function FirstBannerBox() {
  return (
    <Container disableGutters>
      <Box sx={{ marginBottom: "48px" }}>
        <Stack direction="row">
          <Box component="img" src={banner1.src} alt="banner 1" />
          <Box component="img" src={banner2.src} alt="banner 2" />
        </Stack>
      </Box>
    </Container>
  );
}
