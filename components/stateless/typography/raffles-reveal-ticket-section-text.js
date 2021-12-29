import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { TICKET_SECTION_CAPTION } from "../../../constants/dimensions";

const RafflesRevealTicketSectionText = ({ numTickets }) => {
  return (
    <Box>
      <Typography>Draw Tickets</Typography>
      <Typography>{numTickets} Tickets found</Typography>
      <Typography>{TICKET_SECTION_CAPTION}</Typography>
    </Box>
  );
};

export default RafflesRevealTicketSectionText;
