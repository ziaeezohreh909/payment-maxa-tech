import Box from "@mui/material/Box";
import React from "react";
import SingleProduct from "./single-product";
import { useRouter } from "next/router";
import { useGetProductByCategory, useGetProductById } from "../hooks";
import SimilarProductsSlider from "./similar-products";
import Comments from "./comment";
import CustomTabs from "./tabs";
import { Typography } from "@mui/material";
import CommentSide from "./comment/comment-side";
import TechnicalDetails from "./technical";
import PayInfoCard from "./pay-info-card";

export default function SingleProductWidget() {
  const routerId = useRouter().query.id;
  const { data: oneProduct, isSuccess: isProductLoaded } = useGetProductById(
    Number(routerId)
  );
  const { data: productsByCategory } = useGetProductByCategory(
    isProductLoaded ? oneProduct?.categoryName : "",
    isProductLoaded ? Number(routerId) : 0
  );

  return (
    <Box>
      <Box
        sx={{ display: "flex", flexDirection: "row", gap: 4, flexWrap: "wrap" }}
      >
        <SingleProduct product={oneProduct!}></SingleProduct>
        <PayInfoCard product={oneProduct!} />
      </Box>
      <CustomTabs>
        <TechnicalDetails detail={oneProduct!}></TechnicalDetails>
        <SimilarProductsSlider
          products={productsByCategory!}
        ></SimilarProductsSlider>
        <Box marginBottom={"8px"}>
          <Box marginBottom={"24px"}>
            <Typography fontSize={"20px"}>Comments</Typography>
          </Box>
          <Box display={"flex"} flexDirection={"row"} gap={"20px"}>
            <CommentSide />
            <Comments />
          </Box>
        </Box>
      </CustomTabs>
    </Box>
  );
}
