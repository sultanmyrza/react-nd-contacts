import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './index.css';
import ListContacts from './components/ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './components/CreateContact';


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

  createContact = (contact) => {
    ContactsAPI.create(contact);
    this.setState((state) => ({
      contacts: state.contacts.concat([contact])
    }))
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <ListContacts 
            onDeleteContact={this.removeContact} 
            contacts={this.state.contacts}   
          />
        )}>
        </Route>
        <Route path="/create" render={({history}) => (
          <CreateContact 
            onCreateContact={(contact) => {
              this.createContact(contact);
              history.push("/");
            }}
          />
        )} />
      </div>
    );
  }
}

export default App;
