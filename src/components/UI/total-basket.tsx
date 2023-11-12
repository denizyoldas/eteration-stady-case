import { BasketContext } from "@/context/basket-context";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";
import { useContext } from "react";

const TotalBasket = () => {
  const { total } = useContext(BasketContext);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "2px",
      }}
    >
      <WorkOutlineIcon fontSize="medium" />
      <Typography variant="body1" noWrap component="div">
        <CountUp end={total} suffix="₺" />
      </Typography>
    </Box>
  );
};

export default TotalBasket;
