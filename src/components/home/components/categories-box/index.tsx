import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import CategoryCard from "./category-card";

import accessories from "@/assets/images/categories-images/accessories.png";
import camera from "@/assets/images/categories-images/camera.png";
import laptop from "@/assets/images/categories-images/laptop.png";
import smartPhone from "@/assets/images/categories-images/smartphone.png";
import gaming from "@/assets/images/categories-images/gaming.png";
import smartWatch from "@/assets/images/categories-images/smartwatch.png";

const categories = [
  {
    id: "1",
    image: accessories,
    title: "Accessories",
  },
  {
    id: "2",
    image: camera,
    title: "Camera",
  },
  {
    id: "3",
    image: laptop,
    title: "Laptop",
  },
  {
    id: "4",
    image: smartPhone,
    title: "Smart Phone",
  },
  {
    id: "5",
    image: gaming,
    title: "Gaming",
  },
  {
    id: "6",
    image: smartWatch,
    title: "Smart Watch",
  },
];

export default function CategoriesBox() {
  return (
    <Container disableGutters>
      <Box
        sx={{
          marginBottom: "48px",
          display: "flex",
          gap: 1,
          justifyContent: "center",
        }}
      >
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            image={category.image}
            title={category.title}
          />
        ))}
      </Box>
    </Container>
  );
}
