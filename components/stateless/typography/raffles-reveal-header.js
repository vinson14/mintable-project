import { Box, Typography } from "@mui/material";

const RafflesRevealHeader = ({ title, caption }) => {
  return (
    <Box mt={2.5}>
      <Typography align="center">{title}</Typography>
      <Typography align="center">{caption}</Typography>
    </Box>
  );
};

export default RafflesRevealHeader;
