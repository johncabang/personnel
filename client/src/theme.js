//  "unstable_createMuiStrictModeTheme as createMuiTheme" instead of "createMuiTheme" is a temporary fix to the "findDOMNode is deprecated in StrictMode" error/issue

import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7c4dff",
    },
    secondary: {
      main: "#ff5252",
    },
  },
});

export default theme;
