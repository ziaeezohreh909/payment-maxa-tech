import React, { useState } from "react";
import { Box } from "@mui/material";
import Card from "@/components/shared/card";
import { IProduct } from "@/components/home/hooks/types";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function ProductCards({
  data,
  isLoading,
}: {
  data: IProduct[] | undefined;
  isLoading: boolean;
}) {
  const [page, setPage] = useState(1);
  const productsPerPage = 9;

  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data?.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          maxWidth: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          mb: "137px",
        }}
      >
        {currentProducts?.map((item) => (
          <Box key={item.id} sx={{ marginRight: "10px", marginBottom: "10px" }}>
            <Card cardProps={item} hoverMode={{ hoverMode: "productHover" }} />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          position: "absolute",
          bottom: -55,
          fontSize: "28px",
          fontWeight: "300",
        }}
      >
        {data && (
          <Stack sx={{ fontSize: "28px", fontWeight: "300" }} spacing={2}>
            <Pagination
              count={Math.ceil(data.length / productsPerPage || 1)}
              page={page}
              onChange={handleChangePage}
              showFirstButton
              showLastButton
            />
          </Stack>
        )}
      </Box>
    </Box>
  );
}

export default ProductCards;
