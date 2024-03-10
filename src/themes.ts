import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
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
    // mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
    background: {
      default: '#303030', // This will be the background color in dark mode
      paper: '#424242',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
      disabled: '#ffffff',
    },
  },
});

export { darkTheme, lightTheme };