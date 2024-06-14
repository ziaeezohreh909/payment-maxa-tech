import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import accessories from "@/assets/images/categories-icons/Accessories.svg";
import camera from "@/assets/images/categories-icons/camera.svg";
import laptop from "@/assets/images/categories-icons/monitor.svg";
import smartPhone from "@/assets/images/categories-icons/mobile.svg";
import gaming from "@/assets/images/categories-icons/game.svg";
import smartWatch from "@/assets/images/categories-icons/watch-status.svg";

const category = [
  {
    id: 1,
    src: accessories,
    name: "Accessories",
  },
  {
    id: 2,
    src: camera,
    name: "Camera",
  },

  {
    id: 3,
    src: laptop,
    name: "Laptop",
  },
  {
    id: 4,
    src: smartPhone,
    name: "Smart Phone",
  },
  {
    id: 5,
    src: gaming,
    name: "Gaming",
  },
  {
    id: 6,
    src: smartWatch,
    name: "Smart Watch",
  },
];

function CategoryFilterButton() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "32px", mb: "48px" }}>
      {category.map((item) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "108px",
            padding: "8px",
            cursor: "pointer",
          }}
        >
          <CardMedia
            sx={{ width: "48px", height: "48px" }}
            component="img"
            image={item.src.src}
            alt={item.name}
          />
          <Typography
            gutterBottom
            variant="body1"
            component="p"
            sx={{
              fontSize: "20px",
              color: "#444444",
              fontWeight: "300",
              textAlign: "center",
            }}
          >
            {item.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default CategoryFilterButton;
