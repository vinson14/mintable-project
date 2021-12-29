import { Box, Typography } from "@mui/material";

const RafflesRevealHeader = ({ title, caption }) => {
  return (
    <Box>
      <Typography align="center">{title}</Typography>
      <Typography align="center">{caption}</Typography>
    </Box>
  );
};

export default RafflesRevealHeader;
