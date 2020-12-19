import React from 'react';

import styles from './Filter.module.css'

const Filter = ({ name, value, onChange}) => {
    return <div className={styles.container}>
        <label className={styles.label}> Filter: 
            <input className={styles.input} name={name} type="text" value={value} onChange={onChange} />
        </label>
    </div>
}

export default Filter;

