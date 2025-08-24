import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "Arial", "sans-serif"].join(","),
    h1: {
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    body1: {
      fontSize: "1.1rem",
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.5,
      fontWeight: 400,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
  },
});

export default theme;
