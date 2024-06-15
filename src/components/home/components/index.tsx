import React from "react";
import { Box } from "@mui/material";
import CategoriesBox from "./categories-box";
import AmazingDiscounts from "./amazing-discounts";
import NewProducts from "./new-products";
import Intro from "./hero";
import BestSeller from "./best-seller";
import TopBrands from "./top-brands";
import FirstBannerBox from "./first-banner-box";
import SecondBannerBox from "./seconsd-banner-box";
import Blog from "./blog";
import OurServices from "./our-services";
import Hero from "./hero";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Hero />
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
