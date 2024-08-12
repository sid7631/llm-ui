import React from 'react';
import { Card, CardContent, Typography, Icon } from '@mui/material';
import { styled } from '@mui/system';

const CustomCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  minWidth: '160px',
  maxWidth: '160px',
  margin: theme.spacing(1)
}));

const iconStyles = {
  marginBottom: '-5px',
  marginRight: '8px',
};

const SystemCards = ({ icon, title, color }) => {
  return (
    <CustomCard >
      <CardContent>
        <Typography variant="subtitle2" component="div" color='grey'>
          {/* <Icon style={{ ...iconStyles, color: color }}>{icon}</Icon> */}
          {title}
        </Typography>
      </CardContent>
    </CustomCard>
  );
};

export default SystemCards;


