import React from 'react';

import Contact from './Contact'

import styles from './ContactList.module.css';

const ContactList = ({contacts, deleteOnClick}) => {
    return <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
            <li className={styles.item} key={id}>
                <Contact name={name} number={number} />
                <button className={styles.button} id={id} onClick={ deleteOnClick }>Delete</button>
            </li>))}
   </ul>
}

export default ContactList;