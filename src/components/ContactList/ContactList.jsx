import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/userApi';
import { List } from './ContactList.styled';
import CircularProgress from '@mui/material/CircularProgress';
import ContactItem from 'components/ContactItem';
import PropTypes from 'prop-types';

const ContactList = ({ getContactToEdit }) => {
  const { data, isLoading } = useGetContactsQuery();
  const filterValue = useSelector(({ filter }) => filter);
  const filterContacts = () => {
    if (data) {
      const normalizedContacts = filterValue.toLowerCase();
      return data.filter(({ name }) =>
        name.toLowerCase().includes(normalizedContacts)
      );
    }
  };

  const filteredContacts = filterContacts();

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
            <ContactItem
              getContactToEdit={getContactToEdit}
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          ))}
        </List>
      )}
    </>
  );
};

ContactList.propTypes = {
  getContactToEdit: PropTypes.object,
};

export default ContactList;
