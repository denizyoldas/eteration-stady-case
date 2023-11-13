import { Box, IconButton, TextField } from "@mui/material";
import { useEffect, useMemo } from "react";
import { debounce } from "lodash";
import SearchIcon from "@mui/icons-material/Search";

interface SearchProps {
  value?: string | null;
  placeholder?: string;
  onChange: (value: string) => void;
  "data-testid"?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sx?: any;
}

export default function Search({
  value,
  onChange,
  placeholder = "Search",
  "data-testid": dataTestId = "search",
  sx,
}: SearchProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const debouncedChangeHandler = useMemo(() => debounce(handleChange, 500), []);

  useEffect(() => {
    return debouncedChangeHandler.cancel();
  });

  return (
    <Box
      bgcolor="white"
      sx={{
        borderRadius: "4px",
        ...sx,
      }}
    >
      <TextField
        size="small"
        placeholder={placeholder}
        defaultValue={value}
        onChange={debouncedChangeHandler}
        InputProps={{
          startAdornment: (
            <IconButton type="button" aria-label="search">
              <SearchIcon />
            </IconButton>
          ),
        }}
        inputProps={{
          "data-testid": dataTestId,
        }}
      />
    </Box>
  );
}
