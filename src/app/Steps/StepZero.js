import React from 'react';
import styles from "@/app/page.module.css";
const StepZero = ({ handleChange }) => {
    return (
        <div>
            <div className={styles.inputGroup}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" onChange={handleChange} placeholder="Your Name" />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" onChange={handleChange} placeholder="Your Email" />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" onChange={handleChange} placeholder="Your Password" />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input id="phoneNumber" name="phoneNumber" type="text" onChange={handleChange} placeholder="Your Phone Number" />
            </div>

        </div>
    );
};


export default StepZero;