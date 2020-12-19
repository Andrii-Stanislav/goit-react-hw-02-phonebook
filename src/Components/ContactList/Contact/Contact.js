import React from 'react';

import styles from './Contact.module.css'

const Contact = ({ name, number}) => {
    return <div className={styles.contact}>
        <span>{ name }</span>
        <span>{ number }</span>
    </div> 
}

export default Contact;