import { createTheme } from "@mui/material";

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
      main: "#a8a8a8",
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
