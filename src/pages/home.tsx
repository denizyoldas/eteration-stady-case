import Loading from "@/components/UI/loading";
import Filter from "@/components/filter";
import ProductCard from "@/components/product-card";
import { useGetProductsQuery } from "@/data/product/use-get-products.query";
import { Box, Grid, Pagination } from "@mui/material";

const HomePage = () => {
  const { data, isLoading } = useGetProductsQuery();

  if (isLoading) return <Loading />;

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Filter />
      <Grid container spacing={2}>
        {data?.map((product) => (
          <Grid item xs={12} sm={4} md={3} key={product.id}>
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
          <Pagination count={10} size="small" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
