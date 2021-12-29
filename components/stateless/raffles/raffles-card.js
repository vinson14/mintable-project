import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { RAFFLES_LIST_CARD_HEIGHT, RAFFLES_LIST_CARD_WIDTH } from "../../../constants/dimensions";

const RafflesCard = ({ color, onMouseDown }) => {
  return (
    <Grid my={2} item lg={12} xs={4} display="flex" justifyContent="center" onMouseDown={() => onMouseDown(color)}>
      <Image
        height={RAFFLES_LIST_CARD_HEIGHT}
        width={RAFFLES_LIST_CARD_WIDTH}
        alt={`${color} Card`}
        src={`/${color}-card.png`}
      />
    </Grid>
  );
};

export default RafflesCard;
