import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = ({ variant = 'default' }) => {
  const isLight = variant === 'light';
  
  return (
    <Box
      component={Link}
      to="/"
      sx={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: isLight ? 'common.white' : 'text.primary'
      }}
    >
      <Typography
        variant="h4"
        component="span"
        sx={{
          fontFamily: 'serif',
          fontWeight: 500,
          color: isLight ? 'common.white' : '#2A3942',
          mr: 1
        }}
      >
        tryBee
      </Typography>
      <Box
        component="img"
        src="/logo.svg"
        alt="tryBee"
        sx={{
          height: 32,
          display: { xs: 'none', md: 'block' }
        }}
      />
    </Box>
  );
};

export default Logo; 