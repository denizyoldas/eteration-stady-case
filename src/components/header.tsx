import { Toolbar } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";

const drawerWidth = 240;

const Header = () => {
  return (
    <MuiAppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: "#003399",
      }}
    >
      <Toolbar />
    </MuiAppBar>
  );
};

export default Header;
