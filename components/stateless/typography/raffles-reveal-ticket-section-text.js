import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { TICKET_SECTION_CAPTION } from "../../../constants/dimensions";

const RafflesRevealTicketSectionText = ({ numTickets }) => {
  return (
    <Box sx={{ ml: 3.5 }}>
      <Typography>Draw Tickets</Typography>
      <Typography>{numTickets} Tickets found</Typography>
      <Typography>{TICKET_SECTION_CAPTION}</Typography>
    </Box>
  );
};

export default RafflesRevealTicketSectionText;
