import { AppBar, Box, Toolbar } from "@mui/material";
import { flexbox } from "@mui/system";
import { TOP_NAVBAR_HEIGHT } from "../../../constants/dimensions";
import MintableLogo from "../logo/mintable-logo";
import ResponsiveTopNavbarMenu from "./responsive-top-navbar-menu";
import SearchBox from "./search-box";

const TopNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ height: TOP_NAVBAR_HEIGHT, display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex" }}>
          <MintableLogo />
          <SearchBox />
        </Box>
        <Box>
          <ResponsiveTopNavbarMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
