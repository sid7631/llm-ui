import React, { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  IconButton,
  Popper,
  Autocomplete,
  Chip,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useTheme } from '@mui/material/styles';
import CommandIcon from '@mui/icons-material/Code';
import MentionIcon from '@mui/icons-material/Person';

const commandOptions = [
  { type: 'command', label: 'help', description: 'Get help using commands' },
  { type: 'command', label: 'search', description: 'Search for something' },
  { type: 'command', label: 'logout', description: 'Log out of the application' },
];

const mentionOptions = [
  { type: 'user', label: 'john_doe', avatar: '/path/to/avatar1.png', description: 'John Doe' },
  { type: 'user', label: 'jane_smith', avatar: '/path/to/avatar2.png', description: 'Jane Smith' },
];

export default function ChatInput() {
  const theme = useTheme();

  const [inputValue, setInputValue] = useState('');
  const [selectedCommand, setSelectedCommand] = useState(null); // State to hold the selected command
  const [selectedMentions, setSelectedMentions] = useState([]); // State to hold the selected mentions
  const [anchorEl, setAnchorEl] = useState(null);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const lastTriggerChar = inputValue.match(/[@/]$/)?.[0];

    if (lastTriggerChar === '/') {
      // Restrict '/' to the beginning of the input
      if (inputValue.length === 1) {
        setFilteredOptions(commandOptions);
        setAnchorEl(document.getElementById('command-input'));
        setOpen(true);
      } else {
        setFilteredOptions([]);
        setAnchorEl(null);
      }
    } else if (lastTriggerChar === '@') {
      const availableMentions = mentionOptions.filter(
        (option) => !selectedMentions.some((mention) => mention.label === option.label)
      );
      setFilteredOptions(availableMentions);
      setAnchorEl(document.getElementById('command-input'));
      setOpen(true);
    } else {
      setFilteredOptions([]);
      setAnchorEl(null);
    }
  }, [inputValue, selectedMentions]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);

    if (event.target.value === '') {
      setFilteredOptions([]);
    }
  };

  const handleOptionSelect = (event, newValue) => {
    const triggerChar = inputValue[0];
    if (triggerChar === '/') {
      // Handle command selection
      setSelectedCommand(newValue);
      setInputValue(''); // Clear the input field after selecting a command
      setFilteredOptions([]);
      setAnchorEl(null);
    } else if (inputValue.includes('@')) {
      // Handle mention selection
      setSelectedMentions([...selectedMentions, newValue]);
      setInputValue(inputValue.replace(/@$/, '')); // Remove '@' from the input
      setFilteredOptions([]);
      setAnchorEl(null);
    }
  };

  const handleSend = () => {
    console.log('Message:', inputValue);
    console.log('Selected Command:', selectedCommand);
    console.log('Selected Mentions:', selectedMentions);
    setInputValue('');
    setSelectedCommand(null);
    setSelectedMentions([]);
  };

  const handleDeleteCommand = () => {
    setSelectedCommand(null);
  };

  const handleDeleteMention = (mentionToDelete) => () => {
    setSelectedMentions((mentions) => mentions.filter((mention) => mention !== mentionToDelete));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
        }}
      >

        {selectedCommand && (
         <Chip
         label={selectedCommand.label}
         onDelete={handleDeleteCommand}
         icon={<CommandIcon />}
         sx={{
           marginBottom: theme.spacing(1),
           backgroundColor: theme.palette.primary.light,
           color: theme.palette.primary.contrastText,
         }}
       />
        )}

        {selectedMentions.map((mention) => (
         <Chip
         key={mention.label}
         avatar={mention.avatar ? <Avatar src={mention.avatar} /> : <MentionIcon />}
         label={mention.label}
         onDelete={handleDeleteMention(mention)}
         sx={{
           marginBottom: theme.spacing(1),
           backgroundColor: theme.palette.secondary.light,
           color: theme.palette.secondary.contrastText,
         }}
       />
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '8px',
          width: '500px',
          backgroundColor: '#f5f5f5',
          borderRadius: '30px',
          border: '0 solid #e3e3e3',
          mb: theme.spacing(2),
          mx: theme.spacing(2),
          position: 'relative',
        }}
      >
        <TextField
          id="command-input"
          variant="outlined"
          placeholder="Type '/' for commands or '@' to mention..."
          fullWidth
          value={inputValue}
          onChange={handleInputChange}
          multiline
          minRows={1}
          maxRows={8}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px',
              borderColor: 'transparent',
              '&:hover fieldset': {
                borderColor: 'transparent',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'transparent',
              },
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
            '& .MuiOutlinedInput-input': {
              padding: '8px 12px',
            },
            backgroundColor: '#f5f5f5',
          }}
        />
        <IconButton
          onClick={handleSend}
          sx={{
            marginLeft: '8px',
            color: inputValue || selectedCommand || selectedMentions.length ? 'black' : 'grey',
            backgroundColor: inputValue || selectedCommand || selectedMentions.length
              ? '#e0e0e0'
              : 'transparent',
            '&:hover': {
              backgroundColor: inputValue || selectedCommand || selectedMentions.length
                ? '#d0d0d0'
                : 'transparent',
            },
          }}
          disabled={!inputValue && !selectedCommand && selectedMentions.length === 0}
        >
          <SendIcon fontSize="small" />
        </IconButton>

        <Popper
          open={Boolean(filteredOptions.length)}
          anchorEl={anchorEl}
          placement="bottom-start"
          sx={{
            zIndex: 1300,
            width: anchorEl ? anchorEl.clientWidth : undefined,
          }}
        >
          <Autocomplete
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            options={filteredOptions}
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <ListItem {...props} button>
                {option.type === 'user' && (
                  <ListItemAvatar>
                    <Avatar src={option.avatar} />
                  </ListItemAvatar>
                )}
                <ListItemText primary={option.label} secondary={option.description} />
              </ListItem>
            )}
            disableCloseOnSelect
            renderInput={(params) => (
              <TextField {...params} variant="outlined" autoFocus />
            )}
            onChange={handleOptionSelect}
            sx={{ width: '100%' }}
          />
        </Popper>
      </Box>
    </Box>
  );
}
