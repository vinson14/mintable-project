import { Grid } from "@mui/material";

const RafflesListContainer = ({ children }) => {
  return (
    <Grid item lg={3}>
      {children}
    </Grid>
  );
};

export default RafflesListContainer;
