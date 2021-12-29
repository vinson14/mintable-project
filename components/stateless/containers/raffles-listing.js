import { Box } from "@mui/material";
import RafflesCard from "../raffles/raffles-card";

const RafflesListing = () => {
  return (
    <Box>
      <RafflesCard color="Silver" />
      <RafflesCard color="Gold" />
      <RafflesCard color="Diamond" />
    </Box>
  );
};

export default RafflesListing;
