import { Box } from "@mui/material";
import TopNavbar from "../components/stateless/navigation/top-navbar";
import MainContainer from "../components/stateless/containers/main-container";
import RafflesListContainer from "../components/stateless/containers/raffles-list-container";
import RafflesRevealContainer from "../components/stateless/containers/raffles-reveal-container";
import RafflesListHeader from "../components/stateless/typography/raffles-list-header";
import RafflesListingContainer from "../components/stateless/containers/raffles-listing-container";
import RafflesRevealHeader from "../components/stateless/typography/raffles-reveal-header";
import {
  RAFFLES_REVEAL_HEADER_CAPTION,
  RAFFLES_REVEAL_HEADER_TITLE,
  RAFFLES_REVEAL_MAIN_SECTION_CAPTION,
} from "../constants/strings";
import MutedRevealRafflesCard from "../components/stateless/raffles/muted-reveal-raffles-card";
import PageContainer from "../components/stateless/containers/page-container";
import RafflesRevealMainSectionContainer from "../components/stateless/containers/raffles-reveal-main-section-container";
import RafflesRevealMainSectionCaption from "../components/stateless/typography/raffles-reveal-main-section-caption";
import RafflesRevealTicketSectionContainer from "../components/stateless/containers/raffles-reveal-ticket-section-container";
import TicketLogo from "../components/stateless/logo/ticket-logo";
import RafflesRevealTicketSectionText from "../components/stateless/typography/raffles-reveal-ticket-section-text";
import { useEffect, useState } from "react";
import RafflesRevealTicketSectionLogoTextContainer from "../components/stateless/containers/raffles-reveal-ticket-section-logo-text-container";
import PrimaryButton from "../components/stateless/buttons/primary-button";
import { TICKET_OPTIONS, TICKET_SECTION_DRAW_TICKET_BUTTON_TEXT } from "../constants/dimensions";
import RafflesRevealTicketSectionButtonContainer from "../components/stateless/containers/raffles-reveal-ticket-button-container";
import SelectInput from "../components/stateless/inputs/select-input";
import { getRevealedTicket, getTickets } from "../utils/api";
import useTickets from "../custom-hooks/useTickets";
import getTicketOptions from "../utils/getTicketOptions";
import RafflesCard from "../components/stateless/raffles/raffles-card";
import RevealAnimationContainer from "../components/stateless/containers/reveal-animation-container";

const HomePage = () => {
  const [selectedTicket, setSelectedTicket] = useState("silver");
  const [numSilverTickets, numGoldTickets, numDiamondTickets, numTotalTickets] = useTickets();
  const [mouseDownCard, setMouseDownCard] = useState();
  const [showRevealAnimation, setShowRevealAnimation] = useState(false);
  const selectedTicketOnChange = (event) => {
    setSelectedTicket(event.target.value);
  };
  const ticketOptions = getTicketOptions(numSilverTickets, numGoldTickets, numDiamondTickets);

  const onMouseDown = (color) => {
    console.log("onMouseDOwn", color);
    setMouseDownCard(color);
  };

  const revealOnMouseUp = () => {
    console.log(mouseDownCard);
    console.log("Mouse up");
  };

  const revealTicket = () => {
    console.log("ticket revealed");
    getRevealedTicket(selectedTicket);
    setShowRevealAnimation(true);
    // simulate animation
    setTimeout(() => {
      setShowRevealAnimation(false);
    }, 5000);
  };

  return (
    <PageContainer>
      <TopNavbar />
      <MainContainer>
        <RafflesListContainer>
          <RafflesListHeader>Get More Tickets</RafflesListHeader>
          <RafflesListingContainer>
            <RafflesCard color="silver" onMouseDown={onMouseDown} />
            <RafflesCard color="gold" onMouseDown={onMouseDown} />
            <RafflesCard color="diamond" onMouseDown={onMouseDown} />
          </RafflesListingContainer>
        </RafflesListContainer>
        <RafflesRevealContainer>
          {showRevealAnimation ? (
            <RevealAnimationContainer>Reveal animation placeholder</RevealAnimationContainer>
          ) : (
            <>
              <RafflesRevealHeader title={RAFFLES_REVEAL_HEADER_TITLE} caption={RAFFLES_REVEAL_HEADER_CAPTION} />
              <RafflesRevealMainSectionContainer>
                <MutedRevealRafflesCard onMouseUp={revealOnMouseUp} />
                <RafflesRevealMainSectionCaption>{RAFFLES_REVEAL_MAIN_SECTION_CAPTION}</RafflesRevealMainSectionCaption>
              </RafflesRevealMainSectionContainer>
            </>
          )}

          <RafflesRevealTicketSectionContainer>
            <RafflesRevealTicketSectionLogoTextContainer>
              <TicketLogo />
              <RafflesRevealTicketSectionText numTickets={numTotalTickets} />
            </RafflesRevealTicketSectionLogoTextContainer>
            <RafflesRevealTicketSectionButtonContainer>
              <SelectInput value={selectedTicket} onChange={selectedTicketOnChange} options={ticketOptions} />
              <PrimaryButton onClick={revealTicket}>{TICKET_SECTION_DRAW_TICKET_BUTTON_TEXT}</PrimaryButton>
            </RafflesRevealTicketSectionButtonContainer>
          </RafflesRevealTicketSectionContainer>
        </RafflesRevealContainer>
      </MainContainer>
    </PageContainer>
  );
};

export default HomePage;
