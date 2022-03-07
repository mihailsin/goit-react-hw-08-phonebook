import { React } from 'react';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import EditContactForm from '../../components/EditContactForm';
import { Grid, GridContainer } from './Contacts.styled';

const Contacts = () => {
  const [contactToEdit, setContactToEdit] = useState(null);
  const extractContact = (name, number, id) => {
    setContactToEdit({
      extractedName: name,
      extractedNumber: number,
      extractedId: id,
    });
  };
  console.log(contactToEdit);
  return (
    <Grid>
      <GridContainer>
        <h2>Add Contact</h2>
        <ContactForm />
        <h2>Edit Contact</h2>
        <EditContactForm {...contactToEdit} />
      </GridContainer>

      <GridContainer>
        <h2>Contacts</h2>
        <Filter />
        <ContactList getContactToEdit={extractContact} />
      </GridContainer>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Grid>
  );
};

export default Contacts;
