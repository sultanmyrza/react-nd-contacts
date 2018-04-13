import React, { Component } from 'react';
import './index.css';
import ListContacts from './components/ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';


class App extends Component {

  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({contacts})
    })
  }

  state = {
    contacts: []    
  }

  removeContact = (contactToRemove) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((contact) => 
        contact.id !== contactToRemove.id
      )
    }))

    ContactsAPI.remove(contactToRemove);
  }

  render() {
    return (
      <div>
        <ListContacts 
          onDeleteContact={this.removeContact} 
          contacts={this.state.contacts}   
        />
      </div>
    );
  }
}

export default App;
