import { AppContext } from "@/context/app-context";
import { SORT } from "@/utils/filter";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useContext } from "react";

const BRANDS = ["Apple", "Samsung", "Huawei", "Xiaomi", "Oppo", "Vivo"];

const MODELS = ["iPhone 12", "iPhone 12 Pro", "iPhone 12 Pro Max"];

const Filter = () => {
  const { filterChange, filter } = useContext(AppContext);

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    filterChange({ ...filter, sortBy: Number(event.target.value) });
  };

  return (
    <Box
      sx={{
        width: "200px",
        height: "100vh",
        mr: 3,
      }}
    >
      <Title text="Sort By" />
      <Paper
        sx={{
          p: 2,
        }}
      >
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={1}
          name="radio-buttons-group"
          onChange={handleSortChange}
          value={filter?.sortBy}
        >
          {SORT.map((item) => (
            <FormControlLabel
              value={item.id}
              control={<Radio />}
              label={item.text}
              key={item.id}
            />
          ))}
        </RadioGroup>
      </Paper>

      <Title text="Brands" />
      <Paper
        sx={{
          p: 2,
        }}
      >
        <FormGroup>
          {BRANDS.map((item) => (
            <FormControlLabel
              key={item}
              control={<Checkbox />}
              label={item}
              value={item}
            />
          ))}
        </FormGroup>
      </Paper>

      <Title text="Model" />
      <Paper
        sx={{
          p: 2,
        }}
      >
        <FormGroup>
          {MODELS.map((item) => (
            <FormControlLabel
              key={item}
              control={<Checkbox />}
              label={item}
              value={item}
            />
          ))}
        </FormGroup>
      </Paper>
    </Box>
  );
};

export default Filter;

const Title = ({ text }: { text: string }) => {
  return (
    <Typography
      sx={{
        color: "rgba(51, 51, 51, 0.70)",
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        mb: 1,
        mt: 2,
      }}
    >
      {text}
    </Typography>
  );
};
