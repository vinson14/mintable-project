import { Box } from "@mui/material";
import {
  REVEAL_RAFFLES_CARD_BORDER_RADIUS,
  REVEAL_RAFFLES_CARD_HEIGHT,
  REVEAL_RAFFLES_CARD_INNER_BORDER,
  REVEAL_RAFFLES_CARD_INNER_PADDING,
  REVEAL_RAFFLES_CARD_MUTED_COLOR,
  REVEAL_RAFFLES_CARD_WIDTH,
} from "../../../constants/dimensions";
import RafflesRevealCardTopLogo from "./raffles-reveal-card-top-logo";

const MutedRevealRafflesCard = ({ onMouseUp }) => {
  return (
    <Box
      onMouseUp={onMouseUp}
      sx={{
        height: REVEAL_RAFFLES_CARD_HEIGHT,
        width: REVEAL_RAFFLES_CARD_WIDTH,
        bgcolor: REVEAL_RAFFLES_CARD_MUTED_COLOR,
        borderRadius: REVEAL_RAFFLES_CARD_BORDER_RADIUS,
        p: "11.6px",
      }}
    >
      <Box
        sx={{
          bgcolor: REVEAL_RAFFLES_CARD_MUTED_COLOR,
          border: 1,
          borderColor: REVEAL_RAFFLES_CARD_INNER_BORDER,
          p: REVEAL_RAFFLES_CARD_INNER_PADDING,
          height: "100%",
          borderRadius: REVEAL_RAFFLES_CARD_BORDER_RADIUS,
        }}
      >
        Muted Reveal Raffles Card
        <RafflesRevealCardTopLogo />
      </Box>
    </Box>
  );
};

export default MutedRevealRafflesCard;
