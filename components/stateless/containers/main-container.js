import { Grid } from "@mui/material";

const MainContainer = ({ children }) => {
  return (
    <Grid container spacing={3} p={5} sx={{ flexDirection: { xs: "column-reverse", lg: "row" } }}>
      {children}
    </Grid>
  );
};

export default MainContainer;
