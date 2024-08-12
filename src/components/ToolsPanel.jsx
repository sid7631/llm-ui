import React, { useState, useCallback } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import TableSet from './TableSet';
import SchemaGraph from './SchemaGraph';
import Answer from './Answer';

// Memoize the CustomTabPanel to avoid unnecessary re-renders
const CustomTabPanel = React.memo(({ children, value, index, ...other }) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      sx={{
        overflow: 'hidden',
        height: 'calc(100vh - 106px)'
      }}
    >
      {value === index && <Box sx={{ p: 3, height:'100%', overflowY:'scroll'  }}>{children}</Box>}
    </Box>
  );
});

// Utility function for accessibility props
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const ToolsPanel = () => {
  const [value, setValue] = useState(0);

  // useCallback to prevent re-creating the handleChange function on each render
  const handleChange = useCallback((event, newValue) => {
    setValue(newValue);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: 'rgb(255,255,255)', height: 'calc(100vh - 56px)'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Table Set" {...a11yProps(0)} />
          <Tab label="Schema Graph" {...a11yProps(1)} />
          <Tab label="Answer" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TableSet />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SchemaGraph />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Answer />
      </CustomTabPanel>
    </Box>
  );
};

export default ToolsPanel;
