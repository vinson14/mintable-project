import Image from "next/image";
import { TICKET_LOGO_HEIGHT, TICKET_LOGO_WIDTH } from "../../../constants/dimensions";

const TicketLogo = () => {
  return <Image src="/ticket.png" alt="Ticket Logo" height={TICKET_LOGO_HEIGHT} width={TICKET_LOGO_WIDTH} />;
};

export default TicketLogo;
