import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "Nunito"].join(","),
    fontSize: 13,
  },
  palette: {
    background: {
      default: "#e5e5e5",
    },
  },
});
