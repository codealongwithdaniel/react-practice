import React, { useEffect, useState } from 'react';
import './App.css';

import AddContact from './AddContact';
import Header from './Header';
import ContactList from './ContactList';

function App() {

  const LOCAL_STORAGE_SET_KEY = "contacts";

  const [contacts , setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  }

  useEffect(()=>{
    const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SET_KEY));
    setContacts(retrievedContacts);
  }, [])

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_SET_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Header />
      <AddContact addContactHandler ={addContactHandler}/>
      <ContactList contacts = {contacts} />
    </div>
  );
}

export default App;
