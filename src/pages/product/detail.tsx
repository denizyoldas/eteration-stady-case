import { useGetProductQuery } from "@/data/product/use-get-product.query";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetProductQuery(id as string);

  console.log("product", data);

  return (
    <Box
      sx={{
        width: "100%",
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
            <Box>
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
              <Typography paragraph>{data?.description}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ProductDetailPage;
