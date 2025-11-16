import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import typography from "./typography";
import components from "./components";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: palette.background.default,
      paper: palette.background.paper,
    },
    text: {
      primary: palette.text.primary,
      secondary: palette.text.secondary,
    },
  },
  typography: {
    fontFamily: typography.fontFamily,
    fontWeightBold: typography.fontWeightBold,
  },
  components,
});

export default theme;
