import React, {useState} from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled, useTheme } from '@mui/material/styles';
import ChatInput from './ChatInput';
import SystemCardGrid from './SystemCardGrid';
import Container from '@mui/material/Container';
import ChatBox from './ChatBox';


const ChatWindow = () => {

  const theme = useTheme();

  const [isTyping, setIsTyping] = useState(false);

  const handleTypingStart = () => setIsTyping(true);
  const handleTypingEnd = () => setIsTyping(false);
  
  return (
    // <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="md"
      sx={{
        //  maxWidth: '720px !important'
      }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, height: 'calc(100vh - 56px)' }}>

          {/* <Box sx={{ flexGrow: 1, p: 3, color: '#ffffff', backgroundColor: '#1d1f22', display: 'flex', flexDirection: 'column', height: '100vh' }}> */}
          {/* <Typography variant="h4" gutterBottom>
            Hello Siddharth!
          </Typography> */}

          <Box sx={{ flexGrow: 1, flexShrink: 1, flexBasis: '0%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
            {/* <SystemCardGrid /> */}
            {/* <ChatContent /> */}
            <ChatBox />
          </Box>


          {/* <Box sx={{ display: 'flex', alignItems: 'center', pb: 2 }}>
        <TextField 
          variant="outlined"
          fullWidth
          placeholder="Write a message here..."
          sx={{ backgroundColor: '#ffffff', borderRadius: 1 }}
        />
        <Button variant="contained" sx={{ ml: 2, backgroundColor: '#4CAF50' }}>
          Send
        </Button>
      </Box> */}

          <ChatInput />

        </Box>
      </Container>
    // </Box>
  );
};

export default ChatWindow;