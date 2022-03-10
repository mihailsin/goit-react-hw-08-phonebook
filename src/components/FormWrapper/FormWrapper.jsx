import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
const FormWrapper = ({ children }) => {
  return <Box sx={{ display: 'flex', paddingLeft: 7 }}>{children}</Box>;
};

FormWrapper.propTypes = {
  children: PropTypes.node,
};
export default FormWrapper;
