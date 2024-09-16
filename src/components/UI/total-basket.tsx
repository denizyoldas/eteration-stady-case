import useAppStore from "@/store/use-app-store";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Box, Typography } from "@mui/material";
import { NumericFormat } from "react-number-format";

const TotalBasket = () => {
  const { total } = useAppStore((state) => state);

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
        <NumericFormat
          value={total}
          displayType={"text"}
          thousandSeparator="."
          decimalSeparator=","
          suffix={"₺"}
        />
      </Typography>
    </Box>
  );
};

export default TotalBasket;
