import React, { useState } from 'react';
import { Box, Typography, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const useCasesData = [
  { id: '1', name: 'Option A' },
  { id: '2', name: 'Option B' },
];

const LandingPage = () => {
  const [selectedUsecase, setSelectedUsecase] = useState('');

  const handleSelectUsecase = (event) => {
    setSelectedUsecase(event.target.value);
  };

  const handleNext = () => {
    console.log('Selected Use Case:', selectedUsecase);
    // You can add further logic to proceed to the next step based on the selected use case.
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Please select a use case:
      </Typography>

      <FormControl fullWidth sx={{ maxWidth: 300, marginBottom: 2 }}>
        <InputLabel id="usecase-select-label">Use Case</InputLabel>
        <Select
          labelId="usecase-select-label"
          value={selectedUsecase}
          onChange={handleSelectUsecase}
          label="Use Case"
        >
          {useCasesData.map((usecase) => (
            <MenuItem key={usecase.id} value={usecase.name}>
              {usecase.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        onClick={handleNext}
        disabled={!selectedUsecase}
      >
        Next
      </Button>
    </Box>
  );
};

export default LandingPage;
