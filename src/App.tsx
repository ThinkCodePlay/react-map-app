import './App.css'
import Layout from "./layout/Layout.tsx";
import Home from "./pages/Home.tsx";
import {darkTheme, lightTheme} from "./themes.ts";

import {ThemeProvider} from "@mui/material";
import {useState} from "react";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout toggleTheme={toggleTheme} theme={theme} >
          <Home/>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
