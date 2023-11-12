import { BasketContext } from "@/context/basket-context";
import { Product } from "@/types/product/index.model";
import {
  CardMedia,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { useContext } from "react";

interface ProductCardProps extends Product {}

const ProductCard = (product: ProductCardProps) => {
  const { addToBasket } = useContext(BasketContext);

  const addToCardHandler = () => addToBasket(product);

  return (
    <Card
      sx={{
        backgroundColor: "white",
        padding: "10px",
      }}
    >
      <CardMedia
        // sx={{
        //   width: "160px",
        //   height: "150px",
        // }}
        component="img"
        width="160"
        height="150"
        image={product.image}
        alt={product.name}
      />

      <CardContent>
        <Typography variant="h6" component="div" color="primary.main">
          {product.price} ₺
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          {product.name}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="contained"
          fullWidth
          onClick={addToCardHandler}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
