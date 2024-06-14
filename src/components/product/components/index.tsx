import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import Sidebar from "./sidebar";
import Chips from "./chips";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// import Products from "./products/Products";
import CategoryFilterButton from "./category-filter-button";
import ProductCards from "./products";

function Products() {
  const breadcrumbs = [
    <Link
      sx={{ fontSize: "18px" }}
      underline="hover"
      key="1"
      color="inherit"
      href="/"
    >
      Home
    </Link>,
    <Link
      sx={{ fontSize: "18px" }}
      underline="hover"
      key="2"
      color="text.primary"
      href="/products"
    >
      Products
    </Link>,
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack sx={{ mb: "48px" }} spacing={2} p={2}>
        <Breadcrumbs
          separator={
            <NavigateNextIcon fontSize="large" sx={{ color: "#717171" }} />
          }
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <CategoryFilterButton />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          width: "100%",
          gap: 1,
        }}
      >
        {/* <Chips /> */}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 1,
          alignItems: "start",
          width: "100%",
          height: "100vh",
        }}
      >
        <Box sx={{ width: "25%" }}>
          <Sidebar />
        </Box>
        <Box
          sx={{
            width: "75%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              pr: 2,
            }}
          >
            Sort By :
          </Box>
          <Box>
            <ProductCards />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Products;
