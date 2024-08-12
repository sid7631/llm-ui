// App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import ToolsPanel from './components/ToolsPanel';
import { Box } from '@mui/material';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import CreateIcon from '@mui/icons-material/Create';
import Header from './components/Header';

// import './App.css';



const drawerWidth = 260;
const headerHeight = 40;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    backgroundColor: 'rgb(249, 249, 249)',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }),
);


function App() {

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(open => !open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar drawerWidth={drawerWidth} open={open} handleDrawer={handleDrawer} />
      <Main open={open}>
        <Header  open={open} handleDrawer={handleDrawer} />
        {/* {!open && (
          <Box sx={{ px: theme.spacing(1), my: theme.spacing(1), display: 'flex', justifyContent: 'flex-start' }}>

            <IconButton onClick={handleDrawer}>
              <MenuIcon fontSize='inherit' />
            </IconButton>
            <IconButton>
              <CreateIcon fontSize='inherit' />
            </IconButton>
          </Box>
        )} */}
        <Box sx={{ flexGrow: 1, backgroundColor: 'rgb(255,255,255)', display: 'flex', height: 'calc(100vh - 56px)' }}>

          <ChatWindow />
          <ToolsPanel />
        </Box>
      </Main>
    </Box>
  );
}

export default App;