import { AppContext } from "@/context/app-context";
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
import { useNavigate } from "react-router-dom";

interface ProductCardProps extends Product {}

const ProductCard = (product: ProductCardProps) => {
  const { addToBasket } = useContext(AppContext);
  const navigate = useNavigate();

  const addToCardHandler = () => addToBasket(product);

  const goToDetail = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card
      sx={{
        backgroundColor: "white",
        padding: "10px",
        // height: "100%",
      }}
    >
      <CardMedia
        sx={{
          cursor: "pointer",
          // width: "160px",
          // height: "150px",
        }}
        component="img"
        width="160"
        height="150"
        image={product.image}
        alt={product.name}
        onClick={goToDetail}
      />

      <CardContent
        sx={{
          px: 0,
        }}
      >
        <Typography variant="h6" component="div" color="primary.main">
          {product.price} ₺
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          {product.name}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          px: 0,
        }}
      >
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
