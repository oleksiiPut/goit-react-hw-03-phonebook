import React from 'react';
import PropTypes from 'prop-types';
import { Li, P, Span, ListBtn } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDelete }) => (
  <Li key={id}>
    <P>
      <Span>{name}</Span>: {number}
    </P>
    <ListBtn type="button" onClick={() => onDelete(id)}>
      Delete
    </ListBtn>
  </Li>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
