import { AppContext } from "@/context/app-context";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";

const TotalBasket = () => {
  const { total } = useContext(AppContext);

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
        {total} ₺
      </Typography>
    </Box>
  );
};

export default TotalBasket;
