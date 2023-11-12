import { Box, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Avatar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "2px",
      }}
    >
      <PersonOutlineIcon fontSize="medium" />
      <Typography variant="body1" noWrap component="div">
        Deniz
      </Typography>
    </Box>
  );
};

export default Avatar;
