import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import Card from "@/components/shared/card";
import { IProduct } from "@/components/home/hooks/types";

type Props = {
  products: IProduct[];
};

export default function SimilarProductsSlider({ products }: Props) {
  return (
    <Box marginTop={"46px"} marginBottom={"48px"} height={"403px"}>
      <Box>
        <Typography
          sx={{ mt: "46px", mb: "32px", fontSize: "20px", fontWeight: "500" }}
        >
          Similar Products
        </Typography>
      </Box>
      <Box>
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          pagination={{
            clickable: false,
          }}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            800: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1125: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 19,
            },
          }}
        >
          {products?.map((product) => (
            <SwiperSlide key={product.id}>
              <Box padding={"5px"}>
                <Card
                  cardProps={product}
                  hoverMode={{ hoverMode: "productHover" }}
                ></Card>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
