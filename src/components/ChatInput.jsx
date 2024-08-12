import React, { useState } from 'react';
import { Box, TextField, IconButton, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { styled, useTheme } from '@mui/material/styles';

export default function ChatInput() {

  const theme = useTheme();

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  return (
    <Box sx={{
      display:'flex',
      justifyContent:'center',
      width:'100%'
    }}>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px',
          width: '100%',
          backgroundColor: '#f5f5f5',
          borderRadius: '30px',
          border: '0 solid #e3e3e3',
          mb: theme.spacing(2),
          mx: theme.spacing(2)
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Message ChatGPT"
          fullWidth
          value={inputValue}
          onChange={handleInputChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px',
              borderColor: 'transparent', // Remove border color
              '&:hover fieldset': {
                borderColor: 'transparent', // Remove border on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: 'transparent', // Remove border on focus
              },
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent', // Remove default border
            },
            '& .MuiOutlinedInput-input': {
              padding: '8px 12px', // Adjust padding to make it look good without border
            },
            backgroundColor: '#f5f5f5',
          }}
        />
        <IconButton
          sx={{
            marginLeft: '8px',
            color: inputValue ? 'black' : 'grey', // Change color to blue when active
            backgroundColor: inputValue ? '#e0e0e0' : 'transparent', // Add a subtle background when active
            '&:hover': {
              backgroundColor: inputValue ? '#d0d0d0' : 'transparent', // Darker background on hover when active
            }
          }}
          disabled={!inputValue}
        >
          <SendIcon fontSize='small' />
        </IconButton>
      </Box>
    </Box>
  );
}
