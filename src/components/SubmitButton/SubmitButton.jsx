import React from 'react';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
const SubmitButton = ({ text, spinner }) => {
  return (
    <Button
      disabled={false}
      variant="contained"
      sx={{
        mt: 2,
        justifySelf: 'center',
        alignSelf: 'center',
        bgcolor: grey[800],
      }}
      type="submit"
    >
      {text} {spinner}
    </Button>
  );
};

export default SubmitButton;
