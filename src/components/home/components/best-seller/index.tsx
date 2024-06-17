import Card from "@/components/shared/card";
import CustomContainer from "@/components/shared/custom-container";
import { Box } from "@mui/material";
import React from "react";
import { useGetBestSellers } from "../../hooks";

export default function BestSeller() {
  const { data } = useGetBestSellers();

  return (
    <CustomContainer hasLink={true} title="Best Sellers">
      <Box display={"flex"} gap={"24px"}>
        {data?.map((item) => (
          <Card
            key={item.id}
            cardProps={item}
            hoverMode={{ hoverMode: "landingHover" }}
          />
        ))}
      </Box>
    </CustomContainer>
  );
}
