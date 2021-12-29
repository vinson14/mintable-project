import { Box } from "@mui/material";
import { DEFAULT_BG_COLOR } from "../../../constants/dimensions";

const PageContainer = ({ children }) => {
  return <Box sx={{ bgcolor: DEFAULT_BG_COLOR }}>{children}</Box>;
};

export default PageContainer;
