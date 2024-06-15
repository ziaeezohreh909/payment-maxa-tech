import { Box } from "@mui/material";
import { useGetNewProducts } from "../../hooks";
import Card from "@/components/shared/card";
import CustomContainer from "@/components/shared/custom-container";

function NewProducts() {
  const { data } = useGetNewProducts();
  return (
    <CustomContainer hasLink={true} title="New Products">
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

export default NewProducts;
