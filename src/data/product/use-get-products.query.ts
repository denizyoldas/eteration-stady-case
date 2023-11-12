import API from "@/api";
import { QueryParams } from "@/types/index.model";
import { Product } from "@/types/product/index.model";
import { useQuery } from "react-query";

const getProducts = async (params?: QueryParams) => {
  const { data } = await API.get<Product[]>("/products", {
    params,
  });
  return data;
};

export const useGetProductsQuery = (query?: QueryParams) => {
  return useQuery(["products", query], () => getProducts(query));
};
