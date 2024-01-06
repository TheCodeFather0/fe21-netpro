import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(96, 111, 132, 1)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
        },
      },
    },
  },
});

export default theme;
