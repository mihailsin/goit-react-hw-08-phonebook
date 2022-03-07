import React from 'react';
import Box from '@mui/material/Box';

const FormWrapper = ({ children }) => {
  return <Box sx={{ display: 'flex', paddingLeft: 7 }}>{children}</Box>;
};

export default FormWrapper;
