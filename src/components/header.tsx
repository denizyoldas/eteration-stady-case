import { Box, Toolbar, Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Search from "./form/search";
import { useState } from "react";
import Avatar from "./UI/avatar";
import TotalBasket from "./UI/total-basket";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const goToHome = () => navigate("/");

  return (
    <MuiAppBar
      position="fixed"
      sx={{
        px: { sm: "140px" },
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              onClick={goToHome}
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: 800,
                lineHeight: "normal",
                mr: "130px",
                cursor: "pointer",
              }}
            >
              Eteration
            </Typography>

            <Search
              value={searchValue}
              placeholder="Search"
              onChange={setSearchValue}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <TotalBasket />
            <Avatar />
          </Box>
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default Header;
