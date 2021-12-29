import { Box } from "@mui/material";
import RafflesCard from "../raffles/raffles-card";

const RafflesListing = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <RafflesCard color="Silver" />
      <RafflesCard color="Gold" />
      <RafflesCard color="Diamond" />
    </Box>
  );
};

export default RafflesListing;
