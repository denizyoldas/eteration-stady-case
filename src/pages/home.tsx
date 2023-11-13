import Loading from "@/components/UI/loading";
import Filter, { FilterDrawer } from "@/components/filter";
import ProductCard from "@/components/product-card";
import { AppContext } from "@/context/app-context";
import { useGetProductsQuery } from "@/data/product/use-get-products.query";
import { SORT } from "@/utils/filter";
import { Box, Grid, Pagination } from "@mui/material";
import { useContext, useState } from "react";

const HomePage = () => {
  const { filter } = useContext(AppContext);
  const { data, isLoading } = useGetProductsQuery({
    name: filter?.searchTerm || "",
    ...SORT?.find((item) => item.id === filter?.sortBy),
  });

  const filteredData = data?.filter((item) => {
    const brandFilter = filter?.brands?.length
      ? filter?.brands?.includes(item.brand)
      : true;
    const modelFilter = filter?.models?.length
      ? filter?.models?.includes(item.model)
      : true;

    return brandFilter && modelFilter;
  });

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProducts = filteredData?.slice(startIndex, endIndex);

  const handlePageChange = (_: unknown, value: number) => {
    setCurrentPage(value);
  };

  return (
    <Box
      sx={{
        display: { xs: "block", sm: "flex" },
      }}
    >
      <Filter />
      <FilterDrawer />
      {isLoading ? (
        <Loading />
      ) : (
        <Grid container spacing={4}>
          {currentProducts?.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={product.id}>
              <ProductCard {...product} />
            </Grid>
          ))}
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pagination
              count={Math.ceil((data?.length || 0) / itemsPerPage)}
              size="small"
              page={currentPage}
              onChange={handlePageChange}
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default HomePage;
