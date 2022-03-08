import { useDeleteContactMutation } from 'redux/userApi';
import { useState } from 'react';
import { ImBin2 } from 'react-icons/im';
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify';
import { Item, Button, Div } from './ContactItem.styled';
import EditContactModal from 'views/EditContactModal';
const ContactItem = ({ getContactToEdit, name, number, id }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const [contactToEdit, setContactToEdit] = useState(null);
  const extractContact = (name, number, id) => {
    setContactToEdit({
      extractedName: name,
      extractedNumber: number,
      extractedId: id,
    });
  };
  const deleteContactHandler = id => {
    deleteContact(id)
      .unwrap()
      .then(() => toast.success(`${name} deleted from your phonebook`))
      .catch(error =>
        toast.error(
          `DELETE request threw an error! ${error.status}: ${error.data}`
        )
      );
  };

  return (
    <Item onClick={() => extractContact(name, number, id)}>
      {name} : {number}
      <Div>
        <EditContactModal {...contactToEdit} />
        <Button
          type="button"
          onClick={() => deleteContactHandler(id)}
          disabled={isDeleting}
        >
          {isDeleting ? (
            <CircularProgress color="inherit" size={18} />
          ) : (
            <ImBin2 size={18} />
          )}
        </Button>
      </Div>
    </Item>
  );
};

export default ContactItem;
