import { BASE_URL } from "@/constants/urls";
import axios from "axios";

export const getBestSellers = async () => {
  const response = await axios.get(
    `${BASE_URL}?_sort=numReviews&_order=desc&_limit=4`
  );
  return response.data;
};

export const getProductsWithBiggestDiscount = async () => {
  const response = await axios.get(
    `${BASE_URL}?_sort=discount.percent&_order=desc&_limit=10`
  );
  return response.data;
};

export const getNewProducts = async () => {
  const fourCategoriesToPickTheMostExpensiveOf = [
    "Smart Phone",
    "Laptop",
    "Accessories",
    "Gaming",
  ];

  try {
    const newProductsPromises = fourCategoriesToPickTheMostExpensiveOf.map(
      async (categoryName) => {
        const response = await axios.get(
          `${BASE_URL}?categoryName=${categoryName}&_sort=price&_order=desc&_limit=1`
        );
        return response.data[0];
      }
    );

    const newProducts = await Promise.all(newProductsPromises);
    console.log(newProducts);
    return newProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
