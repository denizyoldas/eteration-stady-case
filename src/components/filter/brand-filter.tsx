import { useState } from "react";
import { Box, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import Search from "../form/search";
import { Brand } from "@/types/index.model";

interface Props {
  brands: Brand[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (filter: any) => void;
}

const BrandFilter = ({ brands, onChange }: Props) => {
  const [selectedBrands, setSelectedBrands] = useState<Brand[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleBrandChange = (brand: Brand, checked: boolean) => {
    const updatedBrands = checked
      ? [...selectedBrands, brand]
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any
        selectedBrands.filter((b: any) => b.brand !== brand.brand);
    setSelectedBrands(updatedBrands);
    onChange(updatedBrands);
  };

  return (
    <>
      <Search onChange={setSearchTerm} />
      <Box className="filter-options-container">
        <FormGroup>
          {brands
            .filter((brand) =>
              brand.brand.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((brand) => (
              <FormControlLabel
                key={brand.brand}
                control={
                  <Checkbox
                    checked={selectedBrands.includes(brand)}
                    onChange={(e) => handleBrandChange(brand, e.target.checked)}
                  />
                }
                label={brand.brand}
              />
            ))}
        </FormGroup>
      </Box>
    </>
  );
};

export default BrandFilter;
