import { Box, Grid } from "@mui/material";
import CardContainer from "./card-container";

const RafflesReviewContainer = ({ children }) => {
  return (
    <Grid item sm={12} lg={9}>
      <CardContainer>{children}</CardContainer>
    </Grid>
  );
};

export default RafflesReviewContainer;
