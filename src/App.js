import React, { Component } from 'react';

import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';

import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  filterInput = ({ currentTarget }) => {
    this.setState({ filter: currentTarget.value, });
  }

  createNewContact = ({ id, name, number }) => {
    if (this.verifyNewContact(name)) {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, { id, name, number }],
      }))
    }
    else {
      alert(`${name} is already in contacts`)
    }
  }

  verifyNewContact = (newName) => {
    let verify = true;

    this.state.contacts.forEach(
      ({ name }) => {
        if (name.toLowerCase() === newName.toLowerCase()) { verify = false }
      });
   
    return verify;
  }

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    filter.toLowerCase();

    return contacts.filter( ({ name }) => ( name.toLowerCase().includes(filter) ));;
  }

  deleteContact = (event) => {
    const deleteId = event.currentTarget.id;

    this.setState( ({ contacts }) => ({
      contacts: contacts.filter(({ id }) => (id !== deleteId))
    }) )
  }
  
  render() { 
    const filtered = this.filteredContacts();

    return <div className={ styles.container}>
      <h1 className={ styles.title}>Phonebook</h1>
      <ContactForm onSubmit={this.createNewContact} />
      <h2 className={ styles.title}>Contacts</h2>
      <Filter name="filter" value={ this.state.filter } onChange={ this.filterInput }/>
      <ContactList contacts={filtered} deleteOnClick={ this.deleteContact }/>
      </div>;
  }
}
       
export default App;