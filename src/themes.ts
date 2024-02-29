import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#1E2EB8',
    },
    secondary: {
      main: '#CC2E2B',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#6504b4',
    },
    secondary: {
      main: '#e8a7c0',
    },
  },
});

export { darkTheme, lightTheme };