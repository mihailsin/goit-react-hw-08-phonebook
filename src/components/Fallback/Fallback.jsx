import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const Fallback = () => {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <h1>
        Content is loading{' '}
        <CircularProgress
          color="inherit"
          size={50}
          sx={{ textAlign: 'center' }}
        />
      </h1>
    </Box>
  );
};
export default Fallback;
