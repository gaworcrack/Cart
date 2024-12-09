import axios from "axios";

export interface TProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const fetchProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  console.log(response.data);

  return response.data;
};
