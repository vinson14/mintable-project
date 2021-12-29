import { Box } from "@mui/material";
import TopNavbar from "../components/stateless/navigation/top-navbar";
import MainContainer from "../components/stateless/containers/main-container";
import RafflesListContainer from "../components/stateless/containers/raffles-list-container";
import RafflesRevealContainer from "../components/stateless/containers/raffles-reveal-container";
import RafflesListHeader from "../components/stateless/typography/raffles-list-header";
import RafflesListing from "../components/stateless/containers/raffles-listing";

const HomePage = () => {
  return (
    <Box>
      <TopNavbar />
      <MainContainer>
        <RafflesListContainer>
          <RafflesListHeader>Get More Tickets</RafflesListHeader>
          <RafflesListing />
        </RafflesListContainer>
        <RafflesRevealContainer>Raffles Reveal</RafflesRevealContainer>
      </MainContainer>
    </Box>
  );
};

export default HomePage;
