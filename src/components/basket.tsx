import { Box, Button, Paper, Typography } from "@mui/material";
import useAppStore from "@/store/use-app-store";
import ButtonGroup from "./UI/button-group";
import { Product } from "@/types/product/index.model";
import { NumericFormat } from "react-number-format";

const Basket = () => {
  const { total, basket, itemCountDecrement, itemCountIncrement } = useAppStore(
    (state) => state
  );

  const handleIncrement = (product: Product) => {
    itemCountIncrement(product);
  };

  const handleDecrement = (product: Product) => {
    itemCountDecrement(product);
  };

  return (
    <Box>
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
                alignItems: "flex-start",
              }}
            >
              <Typography>{item.product.name}</Typography>
              <Typography color="primary.main">
                {item.product.price}₺
              </Typography>
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

      <Paper
        sx={{
          p: 2,
          mt: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
            gap: 1,
          }}
        >
          <Typography variant="body1">Total Price:</Typography>
          <Typography variant="h6" color="primary.main" fontWeight="bold">
            <NumericFormat
              value={total}
              displayType={"text"}
              thousandSeparator="."
              decimalSeparator=","
              suffix={"₺"}
            />
          </Typography>
        </Box>
        <Button fullWidth variant="contained" disabled={basket.length === 0}>
          Checkout
        </Button>
      </Paper>
    </Box>
  );
};

export default Basket;
