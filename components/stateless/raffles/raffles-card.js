import { Box } from "@mui/material";
import Image from "next/image";
import { RAFFLES_LIST_CARD_HEIGHT, RAFFLES_LIST_CARD_WIDTH } from "../../../constants/dimensions";

const RafflesCard = ({ color, onMouseDown }) => {
  return (
    <Box sx={{ my: 2 }} onMouseDown={() => onMouseDown(color)}>
      <Image
        height={RAFFLES_LIST_CARD_HEIGHT}
        width={RAFFLES_LIST_CARD_WIDTH}
        alt={`${color} Card`}
        src={`/${color}-card.png`}
      />
    </Box>
  );
};

export default RafflesCard;
