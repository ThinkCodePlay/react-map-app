import Box from "@mui/material/Box";
import {ReactNode} from "react";

const MyTabPanel = (props: { [x: string]: any; children: ReactNode; value: string; index: string; }) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      style={{ display: value === index ? 'block' : 'none' }}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box>
        {children}
      </Box>
    </div>
  );
}

export default MyTabPanel