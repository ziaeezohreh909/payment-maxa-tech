import { BASE_URL } from "@/constants/urls";
import { ICartProducts } from "@/layout/navbar/hooks/types";
import { fetchIdCookie } from "@/layout/navbar/services";
import { queryClient } from "@/pages/_app";
import axios from "axios";

export const addToCart = async (productId: number) => {
  const userId = fetchIdCookie();
  const cartProductObj = { productId: productId, quantity: 1, color: "" };

  try {
    const cartResponse = await axios.get(`${BASE_URL}/cart/${userId}`);
    const userCart = cartResponse.data;

    const existingProductIndex = userCart.cartProducts.findIndex(
      (product: ICartProducts) => product.productId === productId
    );

    if (existingProductIndex !== -1) {
      userCart.cartProducts[existingProductIndex].quantity += 1;
    } else {
      userCart.cartProducts.unshift(cartProductObj);
    }

    const updateResponse = await axios.put(
      `${BASE_URL}/cart/${userId}`,
      userCart
    );
    queryClient.invalidateQueries({ queryKey: ["cartItems"] });
    return updateResponse.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};
