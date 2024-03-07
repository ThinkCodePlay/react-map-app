import './App.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import CssBaseline from '@mui/material/CssBaseline'
import {ThemeProvider} from "@mui/material";

import Layout from "./layout/Layout.tsx";
import Home from "./pages/Home.tsx";
import {darkTheme, lightTheme} from "./themes.ts";

import {useState} from "react";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout toggleTheme={toggleTheme} theme={theme} >
          <Home/>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
