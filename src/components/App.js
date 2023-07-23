import React, { useState } from 'react';
import './App.css';

import AddContact from './AddContact';
import Header from './Header';
import ContactList from './ContactList';

function App() {

  const [contacts , setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  }

  return (
    <div>
      <Header />
      <AddContact addContactHandler ={addContactHandler}/>
      <ContactList contacts = {contacts} />
    </div>
  );
}

export default App;
