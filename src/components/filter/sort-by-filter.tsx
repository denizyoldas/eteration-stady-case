import React from "react";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { SORT } from "@/utils/filter";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filter: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (filter: any) => void;
}

const SortByFilter = ({ filter, onChange }: Props) => {
  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...filter, sortBy: Number(event.target.value) });
  };

  return (
    <RadioGroup
      aria-labelledby="sort-by-group-label"
      defaultValue={1}
      name="sort-by-group"
      onChange={handleSortChange}
      value={filter?.sortBy}
    >
      {SORT.map((item) => (
        <FormControlLabel
          key={item.id}
          value={item.id}
          control={<Radio />}
          label={item.text}
        />
      ))}
    </RadioGroup>
  );
};

export default SortByFilter;
