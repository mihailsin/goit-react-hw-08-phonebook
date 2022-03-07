import { useState } from 'react';
import { useEditContactMutation } from 'redux/userApi';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import TextField from '@mui/material/TextField';
import SubmitButton from 'components/SubmitButton';
import { Form, Wrapper } from '../ContactForm/ContactForm.styled';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from '@mui/material/CircularProgress';

const EditContactForm = ({ extractedName, extractedNumber, extractedId }) => {
  const [editContact, { isLoading }] = useEditContactMutation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [contactId, setContactId] = useState('');

  const nameInputId = nanoid(7);
  const numberInputid = nanoid(7);
  const idInputId = nanoid(7);

  const inputHandler = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'id':
        setContactId(e.target.value);
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
    setContactId('');
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
        <TextField
          sx={{ mt: 2, mb: 2 }}
          variant="outlined"
          disabled
          id={idInputId}
          label="id"
          value={extractedId ? extractedId : contactId}
          onChange={inputHandler}
          type="text"
          name="id"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
        <TextField
          sx={{ mb: 2 }}
          variant="outlined"
          id={nameInputId}
          label="Name"
          value={name}
          onChange={inputHandler}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <TextField
          variant="outlined"
          id={numberInputid}
          label="Number"
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
