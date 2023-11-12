import { AppContext } from "@/context/app-context";
import { Box, Paper } from "@mui/material";
import { useContext } from "react";

const Basket = () => {
  const context = useContext(AppContext);
  const { basket } = context;

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
            <Box>{item.product.name}</Box>
            <Box>{item.count}</Box>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default Basket;
