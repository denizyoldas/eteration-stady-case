import API from "@/api";
import { Brand, QueryParams } from "@/types/index.model";
import { Product } from "@/types/product/index.model";
// import { DUMMY } from "@/utils/dummy";
import { useQuery } from "react-query";

const getProducts = async (params?: QueryParams) => {
  // return DUMMY;
  const { data } = await API.get<Product[]>("/products", {
    params,
  });

  const brands: Brand[] = [];

  data.forEach((product: Product) => {
    const brand = brands.find((brand) => brand.brand === product.brand);

    if (brand) {
      if (!brand.models.includes(product.model))
        brand.models.push(product.model);
    } else {
      brands.push({
        brand: product.brand,
        models: [product.model],
      });
    }
  });

  localStorage.setItem("brands", JSON.stringify(brands));

  return data;
};

export const useGetProductsQuery = (query?: QueryParams) => {
  return useQuery(["products", query], () => getProducts(query));
};
