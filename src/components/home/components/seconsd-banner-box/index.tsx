import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function SecondBannerBox() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      margin={"auto"}
      marginBottom={"48px"}
      width={"1224px"}
      height="420px"
      sx={{
        backgroundImage: "url(/Desktop/banner.png)",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
      }}
    >
      <Typography color={"white"} paddingLeft="64px" variant="h3">
        SMART WATCH
      </Typography>

      <Box height="16px"></Box>

      <Typography color={"white"} paddingLeft="64px" variant="h5">
        Various designs and brands
      </Typography>

      <Box height="32px"></Box>

      <Box
        display={"flex"}
        marginLeft={"193px"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius="8px"
        bgcolor={"#FF6951"}
        width="68px"
        height="35px"
      >
        <Link href={""}>view</Link>
      </Box>
    </Box>
  );
}
