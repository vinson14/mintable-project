import Image from "next/image";
import { REVEAL_RAFFLES_CARD_TOP_LOGO_HEIGHT, REVEAL_RAFFLES_CARD_TOP_LOGO_WIDTH } from "../../../constants/dimensions";

const RafflesRevealCardTopLogo = () => {
  return (
    <Image
      src="/raffles-reveal-card-top-logo.png"
      alt="Top logo of raffles reveal card"
      width={REVEAL_RAFFLES_CARD_TOP_LOGO_WIDTH}
      height={REVEAL_RAFFLES_CARD_TOP_LOGO_HEIGHT}
    />
  );
};

export default RafflesRevealCardTopLogo;
