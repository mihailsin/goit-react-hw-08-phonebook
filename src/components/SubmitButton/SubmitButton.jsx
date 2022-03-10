import React from 'react';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import PropTypes from 'prop-types';

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

SubmitButton.propTypes = {
  text: PropTypes.string,
  spinner: PropTypes.node,
};

export default SubmitButton;
