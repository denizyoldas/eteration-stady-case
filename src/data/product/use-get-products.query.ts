import API from "@/api";
import { Product } from "@/types/product/index.model";
import { useQuery } from "react-query";

const getProducts = async () => {
  const { data } = await API.get<Product[]>("/products");
  return data;
};

export const useGetProductsQuery = () => {
  return useQuery("products", getProducts);
};
