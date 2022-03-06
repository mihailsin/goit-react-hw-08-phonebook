import React from 'react';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';

const SubmitButton = ({ text }) => {
  return (
    <Button
      variant="contained"
      sx={{ mt: 2, alignSelf: 'center', bgcolor: grey[900] }}
      type="submit"
    >
      {text}
    </Button>
  );
};

export default SubmitButton;
