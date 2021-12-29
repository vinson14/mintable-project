import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#550DED",
      },
    },
    typography: {
      fontFamily: "'Lato', sans-serif",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
