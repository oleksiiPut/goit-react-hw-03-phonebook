import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { Wrapper, Ul } from './ContactsList.styled';

const ContactsList = ({ contacts, onDelete }) => (
  <Wrapper>
    <Ul>
      <ContactItem contacts={contacts} onDelete={onDelete} />
    </Ul>
  </Wrapper>
);

export default ContactsList;
