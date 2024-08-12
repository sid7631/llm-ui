import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { styled, useTheme, alpha } from '@mui/material/styles';
import CreateIcon from '@mui/icons-material/Create';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggleButton from './ThemeToggleButton';

const Header = (props) => {
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', p: theme.spacing(1) }}>

      <Toolbar variant="dense" style={{ minHeight: '40px' }} disableGutters>
        <>
        {!props.open && (

          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>

            <IconButton onClick={props.handleDrawer}>
              <MenuIcon fontSize='inherit' />
            </IconButton>
            <IconButton>
              <CreateIcon fontSize='inherit' />
            </IconButton>
          </Box>
        )}

        <ThemeToggleButton />
        </>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
