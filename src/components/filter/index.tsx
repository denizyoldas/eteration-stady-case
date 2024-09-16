import useAppStore from "@/store/use-app-store";
import useLocalStorage from "@/hook/use-local-storage";
import { Brand } from "@/types/index.model";
import { Box, Drawer, IconButton, Paper, Typography } from "@mui/material";
import { useState } from "react";
import SortByFilter from "./sort-by-filter";
import BrandFilter from "./brand-filter";
import ModelFilter from "./model-filter";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const drawerWidth = 240;

export const FilterDrawer = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <IconButton
        sx={{
          display: { xs: "block", md: "none" },
        }}
        onClick={() => setOpen(true)}
      >
        <FilterAltIcon />
      </IconButton>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: { xs: "block", sm: "none" },
        }}
        variant="temporary"
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Filter isDrawer />
      </Drawer>
    </>
  );
};

const Filter = ({ isDrawer = false }: { isDrawer?: boolean }) => {
  const { filterChange, filter } = useAppStore((state) => state);
  const [brands] = useLocalStorage<Brand[]>("brands", []);

  return (
    <Box
      className="filter-container"
      sx={{
        display: { xs: isDrawer ? "flex" : "none", sm: "flex" },
      }}
    >
      <Title text="Sort By" />
      <Paper className="filter-paper">
        <SortByFilter filter={filter} onChange={filterChange} />
      </Paper>
      <Title text="Brands" />
      <Paper className="filter-paper-scroll">
        <BrandFilter brands={brands} onChange={filterChange} />
      </Paper>
      <Title text="Model" />
      <Paper className="filter-paper">
        <ModelFilter brands={brands} onChange={filterChange} />
      </Paper>
    </Box>
  );
};

export default Filter;

const Title = ({ text }: { text: string }) => (
  <Typography className="filter-title">{text}</Typography>
);
