import React from 'react';
import userImage from '../images/user.png'

const ContactCard = (props) => {
    const {name, email} = props.contact;
    return (
        <div class="card">
            <div class="content">
                <img className='ui avatar image' src={userImage} alt='user'/>
                <div className="header">{name}</div>
                <div className="meta">{email}</div>
                <i className='trash alternate outside icon'></i>
            </div>
        </div>
    );
}

export default ContactCard;