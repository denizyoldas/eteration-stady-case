import Filter from "@/components/filter";
import ProductCard from "@/components/product-card";
import { useGetProductsQuery } from "@/data/product/use-get-products.query";
import { Box, Grid } from "@mui/material";

const HomePage = () => {
  const { data, isLoading } = useGetProductsQuery();

  console.log(data);

  if (isLoading) return <Box>Loading...</Box>;

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Filter />
      <Grid container spacing={2}>
        {data?.map((product) => (
          <Grid item xs={3}>
            <ProductCard key={product.id} {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
