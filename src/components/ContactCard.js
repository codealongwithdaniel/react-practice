import React from 'react';

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return (
        <div class="card">
            <div class="content">
                <div class="header">{name}</div>
                <div class="meta">{email}</div>
                <i className='trash alternate outside icon'></i>
            </div>
        </div>
    );
}

export default ContactCard;