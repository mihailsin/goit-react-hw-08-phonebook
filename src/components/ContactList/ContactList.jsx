import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useGetContactsQuery, useGetCurrentUserQuery } from 'redux/userApi';
import { List } from './ContactList.styled';
import CircularProgress from '@mui/material/CircularProgress';
import ContactItem from 'components/ContactItem';

const ContactList = () => {
  const { data, isLoading } = useGetContactsQuery();
  const { data: currentUser } = useGetCurrentUserQuery();
  const filterValue = useSelector(({ filter }) => filter);
  console.log(data);

  const filterContacts = () => {
    if (data) {
      const normalizedContacts = filterValue.toLowerCase();
      return data.filter(({ name }) =>
        name.toLowerCase().includes(normalizedContacts)
      );
    }
  };

  const filteredContacts = filterContacts();

  useEffect(() => {}, [currentUser]);

  return (
    <>
      {isLoading && (
        <h3>
          Fetching contacts &nbsp;
          <CircularProgress color="inherit" size={18} />
        </h3>
      )}
      {data && (
        <List>
          {filteredContacts.map(contact => (
            <ContactItem key={contact.id} {...contact} />
          ))}
        </List>
      )}
    </>
  );
};

export default ContactList;
