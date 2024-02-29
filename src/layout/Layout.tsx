import './Layout.css'
import {AppBar, Toolbar, Typography, Box, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import MapIcon from '@mui/icons-material/Map';
import {ReactNode} from "react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import {lightTheme} from "../themes.ts";

interface LayoutProps {
  children: ReactNode;
  toggleTheme: () => void;
  theme: any; // Add theme prop
}

const Layout = ({children, toggleTheme, theme}: LayoutProps) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Typography variant="h6">
              <Box display="flex" alignItems="center">
                <Link to="/" className="header-link">
                  <MapIcon/> React Map App
                </Link>
              </Box>
            </Typography>
            <Button color="inherit" onClick={toggleTheme}>
              {theme === lightTheme ? <WbSunnyIcon /> : <ModeNightIcon />}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <div className="body">
        {children}
      </div>
    </>
  );
};

export default Layout;