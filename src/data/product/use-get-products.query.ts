import API from "@/api";
import { QueryParams } from "@/types/index.model";
import { Product } from "@/types/product/index.model";
// import { DUMMY } from "@/utils/dummy";
import { useQuery } from "react-query";

const getProducts = async (params?: QueryParams) => {
  // return DUMMY;
  const { data } = await API.get<Product[]>("/products", {
    params,
  });
  return data;
};

export const useGetProductsQuery = (query?: QueryParams) => {
  return useQuery(["products", query], () => getProducts(query));
};
