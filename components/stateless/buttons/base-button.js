import { Button } from "@mui/material";
import { BASE_BUTTON_HEIGHT, BASE_BUTTON_WIDTH } from "../../../constants/dimensions";

const BaseButton = ({ children, ...props }) => {
  return (
    <Button variant="contained" sx={{ borderRadius: "2px", my: 1.5 }} {...props}>
      {children}
    </Button>
  );
};

export default BaseButton;
