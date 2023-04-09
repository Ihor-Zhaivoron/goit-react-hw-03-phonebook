import { Component } from 'react';
// import { nanoid } from 'nanoid';

//========== components ==========
import { Phonebook } from './Phonebook/Phonebook';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

//========== styles ==========
import css from './App.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const LS_KEY = 'local_storage_contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem(LS_KEY)) {
      this.setState({ contacts: localStorage.getItem(LS_KEY) });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }
  addContact = (id, name, number) => {
    const findContact = this.state.contacts.find(
      contact => contact.name === name
    );
    if (findContact) {
      Notify.failure(`${name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: id, name: name, number: number }],
    }));
  };

  onFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  onDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div className={css.phonebook}>
        <h1>Phonebook</h1>
        <Phonebook addContact={this.addContact} />
        <Filter onFilter={this.onFilter} />
        <ContactForm contacts={filteredContacts} handleDelete={this.onDelete} />
      </div>
    );
  }
}
