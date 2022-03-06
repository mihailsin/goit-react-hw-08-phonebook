import { React } from 'react';
import { ToastContainer } from 'react-toastify';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';

import { Grid, GridContainer } from './Contacts.styled';

const Contacts = () => {
  return (
    <Grid>
      <GridContainer>
        <h2>Add Contact</h2>
        <ContactForm />
      </GridContainer>

      <GridContainer>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
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
