import React from 'react';
import PropTypes from 'prop-types';
import { Li, P, Span, ListBtn } from './ContactItem.styled';

const ContactItem = ({ contacts, onDelete }) =>
  contacts.map(({ id, name, number }) => (
    <Li key={id}>
      <P>
        <Span>{name}</Span>: {number}
      </P>
      <ListBtn type="button" onClick={() => onDelete(id)}>
        Delete
      </ListBtn>
    </Li>
  ));

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
