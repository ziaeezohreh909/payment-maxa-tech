import React from "react";
import { Box } from "@mui/material";
import Card from "@/components/shared/card";
import { IProduct } from "@/components/home/hooks/types";

function ProductCards({
  data,
  isLoading,
}: {
  data: IProduct[] | undefined;
  isLoading: boolean;
}) {
  console.log(isLoading);
  return (
    <Box
      sx={{
        maxWidth: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        mb: "20px",
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
