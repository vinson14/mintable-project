import { Box } from "@mui/material";

const RafflesRevealTicketSectionContainer = ({ children }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #E9E9E9", py: 5, px: 4 }}>
      {children}
    </Box>
  );
};

export default RafflesRevealTicketSectionContainer;
