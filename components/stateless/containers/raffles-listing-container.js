import { Box } from "@mui/material";

const RafflesListingContainer = ({ children }) => {
  return <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>{children}</Box>;
};

export default RafflesListingContainer;
