import CustomContainer from "@/components/shared/custom-container";
import { Box } from "@mui/material";
import React from "react";

const imageSource = [
  "/Desktop/apple.svg",
  "/Desktop/sony.svg",
  "/Desktop/sam.svg",
  "/Desktop/canon.svg",
  "/Desktop/huawei.svg",
  "/Desktop/lenovo.svg",
];

export default function TopBrands() {
  return (
    <CustomContainer hasLink={false} title="Top Brands">
      <Box display={"flex"} justifyContent={"space-between"}>
        {imageSource.map((source) => (
          <Box key={source} component="img" src={source} />
        ))}
      </Box>
    </CustomContainer>
  );
}
