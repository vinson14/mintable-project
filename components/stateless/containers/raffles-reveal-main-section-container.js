import { Box } from "@mui/material";

const RafflesRevealMainSectionContainer = ({ children }) => {
  return (
    <Box sx={{ py: 5.5, px: 11, width: "100%" }}>
      <Box
        sx={{
          border: "2px dashed #EAEAFF",
          py: 7,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default RafflesRevealMainSectionContainer;
