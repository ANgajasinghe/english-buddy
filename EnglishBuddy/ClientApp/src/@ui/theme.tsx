import {createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: "#20202A",
      },
    },
  },
  palette: {
    type: "light",
    primary: {
      light: "#4B3C99",
      main: "#4B3C99",
      dark: "#4B3C99",
    },
  },
});
