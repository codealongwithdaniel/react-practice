import React from 'react';
import './App.css';

import AddContact from './AddContact';
import Header from './Header';
import ContactList from './ContactList';

function App() {

  let contacts = [
    {
      id : 1,
      name: "Daniel",
      email : "imnamedasdaniel@gmail.com"
    },
    {
      id : 2,
      name: "Aswathi",
      email : "myselfaswathi@gmail.com"
    }
  ]

  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts = {contacts} />
    </div>
  );
}

export default App;
