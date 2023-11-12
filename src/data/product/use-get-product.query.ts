import { Product } from "@/types/product/index.model";
import { useQuery, useQueryClient } from "react-query";

export const useGetProductQuery = (id: string) => {
  const queryClient = useQueryClient();
  return useQuery(
    ["product", id],
    () => {
      const products = queryClient.getQueryData("products") as Product[];

      if (!products) {
        queryClient.prefetchQuery("products");
      }

      return products?.find((product: Product) => product.id === id);
    },
    {
      enabled: !!id,
    }
  );
};
