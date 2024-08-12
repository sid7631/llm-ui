import React from 'react';
import { Box } from '@mui/material';
import CardItem from './SystemCards';

const SystemCardGrid = () => {
  const cardData = [
    { icon: 'edit', title: 'Message to comfort a friend', color: '#C084FC' },
    { icon: 'flight', title: 'Experience Seoul like a local', color: '#FBBF24' },
    { icon: 'school', title: 'Explain nostalgia to a kindergartener', color: '#38BDF8' },
    { icon: 'lightbulb', title: 'Activities to make friends in new city', color: '#FACC15' },
  ];

  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap">
      {cardData.map((card, index) => (
        <CardItem
          key={index}
          icon={card.icon}
          title={card.title}
          color={card.color}
        />
      ))}
    </Box>
  );
};

export default SystemCardGrid;
