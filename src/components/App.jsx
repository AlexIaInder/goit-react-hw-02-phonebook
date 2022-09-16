import { render } from '@testing-library/react';
import React, { Component } from 'react';
import ContactForm from './ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  fromSubmit = data => {
    console.log(data);
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.fromSubmit} />
      </div>
    );
  }
}
