import React from "react";
import { useGetAllProducts } from "../../hooks";
import { Box } from "@mui/material";
import Card from "@/components/shared/card";

function ProductCards() {
  const { data, isLoading, isError } = useGetAllProducts();
  return (
    <Box
      sx={{
        maxWidth: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 5,
      }}
    >
      {data?.map((item) => (
        <Box key={item.itemId} sx={{ marginRight: "10px" }}>
          <Card cardProps={item} />
        </Box>
      ))}
    </Box>
  );
}

export default ProductCards;
