import React from 'react';
import ContactCard from './ContactCard'

const ContactList = (props) => {
    const renderContactList = props.contacts.map((contact)=>{
        return <ContactCard contact={contact} />
    });
    return <div class="ui cards">{renderContactList}</div>;
    
};

export default ContactList;