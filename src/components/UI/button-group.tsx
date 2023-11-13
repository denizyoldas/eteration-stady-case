import Button from "@mui/material/Button";
import MUIButtonGroup from "@mui/material/ButtonGroup";

interface ButtonGroupProps {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

const ButtonGroup = ({
  count,
  handleIncrement,
  handleDecrement,
}: ButtonGroupProps) => {
  return (
    <MUIButtonGroup size="small" aria-label="small outlined button group">
      <Button onClick={handleDecrement}>-</Button>
      <Button
        disabled
        sx={{
          "&:disabled": {
            backgroundColor: "primary.main",
            color: "white",
            fontSize: "18px",
          },
        }}
      >
        {count}
      </Button>
      <Button onClick={handleIncrement}>+</Button>
    </MUIButtonGroup>
  );
};

export default ButtonGroup;
