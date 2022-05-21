import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f4f4f5'
    },
    primary: {
      main: '#2155CD',
    },
    secondary: {
      main: "#79DAE8",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'initial'
        },
      },
    }
  },
});
