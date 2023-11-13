import { Box, Toolbar, Typography } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import Search from "./form/search";
import { useContext } from "react";
import Avatar from "./UI/avatar";
import TotalBasket from "./UI/total-basket";
import { useNavigate } from "react-router-dom";
import { AppContext } from "@/context/app-context";

const Header = () => {
  const navigate = useNavigate();
  const { filter, filterChange } = useContext(AppContext);

  const goToHome = () => navigate("/");

  const searchValueChangeHandler = (value: string) => {
    filterChange({ ...(filter || {}), searchTerm: value });
  };

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
                mr: { xs: "10px", sm: "130px" },
                cursor: "pointer",
              }}
            >
              Eteration
            </Typography>

            <Search
              value={filter?.searchTerm}
              placeholder="Search"
              onChange={searchValueChangeHandler}
              sx={{
                display: { xs: "none", sm: "block" },
              }}
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
