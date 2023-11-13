import { AppContext } from "@/context/app-context";
import useLocalStorage from "@/hook/use-local-storage";
import { Brand } from "@/types/index.model";
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
import { useContext, useEffect, useState } from "react";

const Filter = () => {
  const { filterChange, filter } = useContext(AppContext);
  const [brands] = useLocalStorage<Brand[]>("brands", []);
  const [selectedBrands, setSelectedBrands] = useState<Brand[]>([]);

  useEffect(() => {
    filterChange({
      ...filter,
      brands: selectedBrands.map((item) => item.brand),
      models: selectedBrands.map((item) => item.models).flat(),
    });
  }, [selectedBrands]);

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
          maxHeight: "200px",
          overflowY: "scroll",
        }}
      >
        <FormGroup
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e: any) => {
            const brand = brands.find((item) => item.brand === e.target.value);
            if (brand) {
              setSelectedBrands([...selectedBrands, brand]);
            }
          }}
        >
          {brands.map((item) => (
            <FormControlLabel
              key={item.brand}
              control={<Checkbox />}
              label={item.brand}
              value={item.brand}
            />
          ))}
        </FormGroup>
      </Paper>

      <Title text="Model" />
      <Paper
        sx={{
          p: 2,
          maxHeight: "200px",
          overflowY: "scroll",
        }}
      >
        <FormGroup>
          {selectedBrands.map((brand) =>
            brand.models.map((item) => (
              <FormControlLabel
                key={item}
                control={<Checkbox />}
                label={item}
                value={item}
              />
            ))
          )}
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
