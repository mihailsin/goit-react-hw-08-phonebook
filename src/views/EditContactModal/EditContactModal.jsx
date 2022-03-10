import * as React from 'react';
import Box from '@mui/material/Box';
import { ImPencil2 } from 'react-icons/im';
import { Button } from 'components/ContactItem/ContactItem.styled';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import EditContactForm from 'components/EditContactForm';
import PropTypes from 'prop-types';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const EditContactModal = ({ extractedName, extractedNumber, extractedId }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <ImPencil2 size={18} />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditContactForm
            handleClose={handleClose}
            extractedName={extractedName}
            extractedId={extractedId}
            extractedNumber={extractedNumber}
          />
        </Box>
      </Modal>
    </div>
  );
};

EditContactModal.propTypes = {
  extractedName: PropTypes.string,
  extractedNumber: PropTypes.string,
  extractedId: PropTypes.string,
};
export default EditContactModal;
