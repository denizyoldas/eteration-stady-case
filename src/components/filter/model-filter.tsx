import { useState } from "react";
import { Box, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import Search from "../form/search";
import { Brand } from "@/types/index.model";

interface Props {
  brands: Brand[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (filter: any) => void;
}

const ModelFilter = ({ brands, onChange }: Props) => {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleModelChange = (model: string, checked: boolean) => {
    const updatedModels = checked
      ? [...selectedModels, model]
      : selectedModels.filter((m) => m !== model);
    setSelectedModels(updatedModels);
    onChange(updatedModels);
  };

  return (
    <>
      <Search onChange={setSearchTerm} />
      <Box className="filter-options-container">
        <FormGroup>
          {brands.flatMap((brand) =>
            brand.models
              .filter((model) =>
                model.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((model) => (
                <FormControlLabel
                  key={model + brand.brand}
                  control={
                    <Checkbox
                      checked={selectedModels.includes(model)}
                      onChange={(e) =>
                        handleModelChange(model, e.target.checked)
                      }
                    />
                  }
                  label={model}
                />
              ))
          )}
        </FormGroup>
      </Box>
    </>
  );
};

export default ModelFilter;
