import Loading from "@/components/UI/loading";
import { AppContext } from "@/context/app-context";
import { useGetProductQuery } from "@/data/product/use-get-product.query";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addToBasket } = useContext(AppContext);
  const { data, isLoading } = useGetProductQuery(id as string);

  if (isLoading) return <Loading />;

  const addToCartHandler = () => {
    if (!data) return;
    addToBasket(data);
  };

  return (
    <Box
      sx={{
        width: "100%",

        p: 2,
      }}
    >
      <Paper>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <img
                src={data?.image}
                alt={data?.name}
                style={{ width: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                p: 2,
              }}
            >
              <Typography variant="h6" component="div">
                {data?.name}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                color="primary.main"
              >
                {data?.price} ₺
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  mb: 2,
                }}
                onClick={addToCartHandler}
              >
                Add to Cart
              </Button>
              <Typography paragraph>{data?.description}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ProductDetailPage;
