import React, { useRef } from "react";
import Image from "next/image";
import SVG_BG from "@/assets/images/random-shape-in-blue-png 2.svg";
import { Box, Container, Grid, Typography } from "@mui/material";
import Card from "@/components/shared/card";
import {
  ArrowForwardIosOutlined,
  ArrowLeft,
  ArrowRight,
} from "@mui/icons-material";
import { useGetProductsWithBiggestDiscount } from "../../hooks";

export default function AmazingDiscounts() {
  const scrollRef = useRef(null);
  const { data } = useGetProductsWithBiggestDiscount();

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <Container disableGutters>
      {" "}
      <Box sx={{ marginBottom: "48px" }}>
        <div className="bg-blue-800 rounded-md h-[400px] flex overflow-hidden relative">
          <Image
            src={SVG_BG}
            alt="SVG_BG"
            objectFit="cover"
            className="absolute top-0 left-0"
          />
          <Grid container>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                color: "white",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Typography fontSize={30} textAlign={"center"}>
                  Products On Sale
                </Typography>
                <Typography fontSize={20} textAlign={"center"}>
                  Shop Now!
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  gap: 1,
                }}
              >
                <Typography fontSize={20}>View all</Typography>
                <ArrowForwardIosOutlined fontSize="small" />
              </Box>
            </Grid>
            <Grid item xs={9}>
              <Box
                sx={{
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  overflowX: "auto",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                  "-ms-overflow-style": "none",
                  "scrollbar-width": "none",
                }}
                ref={scrollRef}
              >
                {data?.map((item) => (
                  <Box key={item.itemId} sx={{ marginRight: "10px" }}>
                    <Card cardProps={item} />
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  position: "absolute",
                  right: 20,
                  cursor: "pointer",
                }}
              >
                <ArrowLeft
                  sx={{ backgroundColor: "white", borderRadius: "100%" }}
                  onClick={scrollLeft}
                />
                <ArrowRight
                  sx={{ backgroundColor: "white", borderRadius: "100%" }}
                  onClick={scrollRight}
                />
              </Box>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Container>
  );
}
