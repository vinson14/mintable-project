import { Box } from "@mui/material";

const RafflesRevealTicketSectionLogoTextContainer = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: { xs: "center", lg: "stretch" },
        flexDirection: { xs: "column", lg: "row" },
        px: 6,
        my: 3,
      }}
    >
      {children}
    </Box>
  );
};

export default RafflesRevealTicketSectionLogoTextContainer;
