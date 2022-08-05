import React, { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';

class App extends Component {
  static defaultProps = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12- 56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89- 12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17- 79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91- 26' },
    ],
    filter: '',
  };

  state = {
    contacts: this.props.contacts,
    filter: this.props.filter,
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const existingContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingContact) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    }
  };

  onFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <DivApp>
        <H2>Phonebook</H2>
        <Form onSubmit={this.addContact} />

        <ContactsH2>Contacts</ContactsH2>
        <Filter value={filter} onChange={this.onFilterChange} />
        <ContactsList
          contacts={filteredContacts}
          onDelete={this.onDeleteContact}
        />
      </DivApp>
    );
  }
}

export default App;

const DivApp = styled.div`
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const H2 = styled.h2`
  color: darkgreen;
  font-size: 28px;
  margin-top: 0;
`;

const ContactsH2 = styled.h2`
  margin-top: 0;
  font-size: 24px;
  color: teal;
`;
