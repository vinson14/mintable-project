import { Box } from "@mui/material";
import TopNavbar from "../components/stateless/navigation/top-navbar";
import MainContainer from "../components/stateless/containers/main-container";
import RafflesListContainer from "../components/stateless/containers/raffles-list-container";
import RafflesRevealContainer from "../components/stateless/containers/raffles-reveal-container";
import RafflesListHeader from "../components/stateless/typography/raffles-list-header";
import RafflesListing from "../components/stateless/containers/raffles-listing";
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
import { useState } from "react";

const HomePage = () => {
  const [numTickets, setNumTickets] = useState(0);

  return (
    <PageContainer>
      <TopNavbar />
      <MainContainer>
        <RafflesListContainer>
          <RafflesListHeader>Get More Tickets</RafflesListHeader>
          <RafflesListing />
        </RafflesListContainer>
        <RafflesRevealContainer>
          <RafflesRevealHeader title={RAFFLES_REVEAL_HEADER_TITLE} caption={RAFFLES_REVEAL_HEADER_CAPTION} />
          <RafflesRevealMainSectionContainer>
            <MutedRevealRafflesCard />
            <RafflesRevealMainSectionCaption>{RAFFLES_REVEAL_MAIN_SECTION_CAPTION}</RafflesRevealMainSectionCaption>
          </RafflesRevealMainSectionContainer>
          <RafflesRevealTicketSectionContainer>
            <TicketLogo />
            <RafflesRevealTicketSectionText numTickets={numTickets} />
          </RafflesRevealTicketSectionContainer>
        </RafflesRevealContainer>
      </MainContainer>
    </PageContainer>
  );
};

export default HomePage;
