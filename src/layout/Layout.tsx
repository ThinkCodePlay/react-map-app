import './Layout.css'
import {AppBar, Toolbar, Typography, Box} from '@mui/material';
import {Link} from 'react-router-dom';
import MapIcon from '@mui/icons-material/Map';
import {ReactNode} from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <Box display="flex" alignItems="center">
              <Link to="/" className="header-link">
                <MapIcon/> React Map App
              </Link>
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="body">
        {children}
      </div>
    </>
  );
};

export default Layout;