import { Grid } from "@mui/material";
import CardContainer from "./card-container";

const RafflesListContainer = ({ children }) => {
  return (
    <Grid item lg={3}>
      <CardContainer>{children}</CardContainer>
    </Grid>
  );
};

export default RafflesListContainer;
