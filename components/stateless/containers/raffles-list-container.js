import { Grid } from "@mui/material";
import { RAFFLES_LIST_CONTAINER_BORDER_RADIUS } from "../../../constants/dimensions";
import CardContainer from "./card-container";

const RafflesListContainer = ({ children }) => {
  return (
    <Grid item sm={12} lg={3} borderRadius={RAFFLES_LIST_CONTAINER_BORDER_RADIUS}>
      <CardContainer>{children}</CardContainer>
    </Grid>
  );
};

export default RafflesListContainer;
