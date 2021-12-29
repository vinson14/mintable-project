import { Box } from "@mui/material";
import {
  REVEAL_RAFFLES_CARD_HEIGHT,
  REVEAL_RAFFLES_CARD_INNER_BORDER,
  REVEAL_RAFFLES_CARD_INNER_PADDING,
  REVEAL_RAFFLES_CARD_MUTED_COLOR,
  REVEAL_RAFFLES_CARD_WIDTH,
} from "../../../constants/dimensions";

const MutedRevealRafflesCard = () => {
  return (
    <Box
      sx={{
        height: REVEAL_RAFFLES_CARD_HEIGHT,
        width: REVEAL_RAFFLES_CARD_WIDTH,
        bgcolor: REVEAL_RAFFLES_CARD_MUTED_COLOR,
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
        }}
      >
        Muted Reveal Raffles Card
      </Box>
    </Box>
  );
};

export default MutedRevealRafflesCard;
