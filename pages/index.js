import { Box } from "@mui/material";
import TopNavbar from "../components/stateless/navigation/top-navbar";
import MainContainer from "../components/stateless/containers/main-container";
import RafflesListContainer from "../components/stateless/containers/raffles-list-container";
import RafflesRevealContainer from "../components/stateless/containers/raffles-reveal-container";
import RafflesListHeader from "../components/stateless/typography/raffles-list-header";
import RafflesListing from "../components/stateless/containers/raffles-listing";
import RafflesRevealHeader from "../components/stateless/typography/raffles-reveal-header";
import { RAFFLES_REVEAL_HEADER_CAPTION, RAFFLES_REVEAL_HEADER_TITLE } from "../constants/strings";
import MutedRevealRafflesCard from "../components/stateless/raffles/muted-reveal-raffles-card";
import PageContainer from "../components/stateless/containers/page-container";

const HomePage = () => {
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
          <MutedRevealRafflesCard />
        </RafflesRevealContainer>
      </MainContainer>
    </PageContainer>
  );
};

export default HomePage;
