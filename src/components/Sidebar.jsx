// Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Box, IconButton } from '@mui/material';
import { Home, Chat, Settings, AccountCircle, Dashboard, FolderIcon } from '@mui/icons-material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha, useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import CreateIcon from '@mui/icons-material/Create';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        //   marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    paddingLeft: theme.spacing(1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(3)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            // width: '20ch',
        },
    },
}));

const Sidebar = (props) => {
    const theme = useTheme()
    return (
        <Drawer
        sx={{
            width: props.drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: props.drawerWidth,
              boxSizing: 'border-box',
              backgroundColor:'#f9f9f9',
              border:'0 solid #e3e3e3',
            },
            
          }}
          variant="persistent"
          anchor="left"
          open={props.open}
        >
            <Box sx={{ px: theme.spacing(1), my: theme.spacing(1), display: 'flex', justifyContent: 'space-between' }}>
                <IconButton onClick={props.handleDrawer}>
                    <MenuIcon fontSize='inherit' />
                </IconButton>
                <IconButton>
                    <CreateIcon fontSize='inherit' />
                </IconButton>
            </Box>
            <Box sx={{ px: theme.spacing(1), mt: theme.spacing(2) }}>
                <Box sx={{ py: theme.spacing(1) }}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Box>
            </Box>
            <Box>
                <Box sx={{ px: theme.spacing(2), pt: theme.spacing(1) }}>Recent</Box>
            </Box>
            <List>
                <ListItem button >
                    <ListItemIcon sx={{ minWidth: theme.spacing(4) }}>
                        <ChatBubbleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon sx={{ minWidth: theme.spacing(4) }}>
                        <ChatBubbleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="Chat" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon sx={{ minWidth: theme.spacing(4) }}>
                        <ChatBubbleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon sx={{ minWidth: theme.spacing(4) }}>
                        <ChatBubbleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Profile" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;