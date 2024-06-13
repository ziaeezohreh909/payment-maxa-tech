import React from "react";
import { Box } from "@mui/material";
import CategoriesBox from "./categories-box";
import AmazingDiscounts from "./amazing-discounts";
import NewProducts from "./new-products";
import Intro from "./intro";
import BestSeller from "./best-seller";
import TopBrands from "./top-brands";
import FirstBannerBox from "./first-banner-box";
import SecondBannerBox from "./seconsd-banner-box";
import Blog from "./blog";
import OurServices from "./our-services";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        px: "110px",
      }}
    >
      <Intro />
      <CategoriesBox />
      <AmazingDiscounts />
      <NewProducts />
      <FirstBannerBox />
      <BestSeller />
      <TopBrands />
      <SecondBannerBox />
      <Blog />
      <OurServices />
    </Box>
  );
}
