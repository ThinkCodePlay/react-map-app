import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import React, { useState } from "react";
import Mapbox from "../components/mapbox.tsx";
import UiTabPanel from "../components/UiTabPanel.tsx";
import { Button } from "@mui/material";

const Home = () => {
  const [value, setValue] = useState('1');
  const [tabs, setTabs] = useState([{ value: '1', label: 'Map 1' }]);

  const handleChangeTab = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleAddTab = () => {
    const newValue = (tabs.length + 1).toString();
    setTabs([...tabs, { value: newValue, label: `Map ${newValue}` }]);
    setValue(newValue);
  };

  return (
    <div>
      <h1>React Map App</h1>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChangeTab} aria-label="lab API tabs example">
            {tabs.map(tab => <Tab key={tab.value} label={tab.label} value={tab.value} />)}
            <Button onClick={handleAddTab}>+</Button>
          </TabList>
        </Box>
        {tabs.map(tab => <UiTabPanel key={tab.value} value={value} index={tab.value}><Mapbox /></UiTabPanel>)}
      </TabContext>
    </div>
  )
}

export default Home