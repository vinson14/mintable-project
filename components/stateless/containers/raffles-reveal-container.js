import { Grid } from "@mui/material";
import CardContainer from "./card-container";

const RafflesReviewContainer = ({ children }) => {
  return (
    <Grid item lg={9}>
      <CardContainer>{children}</CardContainer>
    </Grid>
  );
};

export default RafflesReviewContainer;
