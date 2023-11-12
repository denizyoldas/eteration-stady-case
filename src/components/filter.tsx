import { Box, FormControlLabel, Paper, Radio, RadioGroup } from "@mui/material";

const Filter = () => {
  return (
    <Box
      sx={{
        width: "200px",
        height: "100vh",
        mr: "28px",
      }}
    >
      <Box>
        <Paper>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </Paper>
      </Box>
    </Box>
  );
};

export default Filter;
