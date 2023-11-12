import { Product } from "@/types/product/index.model";
import { useQuery } from "react-query";
import API from "@/api";

const getProduct = async (id: string) => {
  const { data } = await API.get<Product>(`/products/${id}`);
  return data;
};

export const useGetProductQuery = (id: string) =>
  useQuery(["product", id], () => getProduct(id), {
    enabled: !!id,
  });
