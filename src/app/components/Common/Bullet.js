import React from 'react';
import styles from './Bullet.module.css';
const Bullet = ({type, value}) => {
    return (
        <div className={styles.container}>
            <p className={styles.type}>{type}:</p>
            <p className={styles.value}>{value}</p>
        </div>
    );
};

export default Bullet;