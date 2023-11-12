import { AppContext } from "@/context/app-context";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import ButtonGroup from "./UI/button-group";
import { Product } from "@/types/product/index.model";

const Basket = () => {
  const { total, basket, itemCountDecrement, itemCountIncrement } =
    useContext(AppContext);

  const handleIncrement = (product: Product) => {
    itemCountIncrement(product);
  };

  const handleDecrement = (product: Product) => {
    itemCountDecrement(product);
  };

  return (
    <Box
      sx={{
        width: "200px",
        height: "100vh",
        ml: "28px",
      }}
    >
      <Paper>
        {basket.map((item) => (
          <Box
            key={item.product.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              borderBottom: "1px solid #ccc",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>{item.product.name}</Typography>
              <Typography>{item.product.price}</Typography>
            </Box>

            <Box>
              <ButtonGroup
                count={Number(item.count)}
                handleDecrement={() => handleDecrement(item.product)}
                handleIncrement={() => handleIncrement(item.product)}
              />
            </Box>
          </Box>
        ))}
      </Paper>

      <Paper>
        <Box>
          <Typography>
            Total Price: <Typography color="primary.main">{total}₺</Typography>
          </Typography>
          <Button fullWidth variant="contained">
            Checkout
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Basket;
