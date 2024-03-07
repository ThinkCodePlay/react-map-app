import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import React from "react";
import Mapbox from "../components/mapbox.tsx";
import UiTabPanel from "../components/UiTabPanel.tsx";

const Home = () => {
  const [value, setValue] = React.useState('1');

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1>React Map App</h1>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <UiTabPanel value={value} index="1"><Mapbox /></UiTabPanel>
        <UiTabPanel value={value} index="2"><Mapbox /></UiTabPanel>
        <UiTabPanel value={value} index="3"><Mapbox /></UiTabPanel>
      </TabContext>
    </div>
  )
}

export default Home