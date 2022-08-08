import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import { Wrapper, Ul } from './ContactsList.styled';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <Wrapper>
      <Ul>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
          />
        ))}
      </Ul>
    </Wrapper>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;
