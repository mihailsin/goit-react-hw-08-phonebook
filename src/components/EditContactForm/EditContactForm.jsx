import { useState } from 'react';
import { useEditContactMutation } from 'redux/userApi';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import SubmitButton from 'components/SubmitButton';
import { Form, Wrapper } from '../ContactForm/ContactForm.styled';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';
import { TextField } from '@mui/material';

const EditContactForm = ({ extractedName, extractedNumber, extractedId }) => {
  const [editContact, { isLoading }] = useEditContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid(7);
  const numberInputid = nanoid(7);
  const idInputId = nanoid(7);

  const inputHandler = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const resetFormFields = () => {
    setName('');
    setNumber('');
  };

  const submitHandler = e => {
    e.preventDefault();
    resetFormFields();

    editContact({ id: extractedId, name, number })
      .unwrap()
      .then(() => toast.success(`${name} added to your phonebook!`))
      .catch(error =>
        toast.error(
          `PATCH request threw an error! ${error.status}: ${error.data}`
        )
      );
  };
  return (
    <Form onSubmit={submitHandler}>
      <Wrapper>
        <h3>Contact to edit</h3>
        <TextField
          disabled
          sx={{ mt: 2, mb: 2 }}
          id={idInputId}
          label="id"
          value={extractedId ? extractedId : ''}
          type="text"
          name="id"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />

        <TextField
          disabled
          sx={{ mb: 2 }}
          id={nameInputId}
          label="Name"
          value={extractedName ? extractedName : ''}
          type="text"
          name="oldContactName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <TextField
          disabled
          id={numberInputid}
          label="Number"
          value={extractedNumber ? extractedNumber : ''}
          type="tel"
          name="oldContactNumber"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <h3>Edited Contact</h3>
        <TextField
          sx={{ mb: 2 }}
          id={nameInputId}
          label="New Name"
          value={name}
          onChange={inputHandler}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <TextField
          id={numberInputid}
          label="New Number"
          value={number}
          onChange={inputHandler}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        {isLoading ? (
          <SubmitButton
            disabled={true}
            text={'Adding contact'}
            spinner={<CircularProgress color="inherit" size={14} />}
          ></SubmitButton>
        ) : (
          <SubmitButton text={'Edit Contact'}></SubmitButton>
        )}
      </Wrapper>
    </Form>
  );
};

export default EditContactForm;
