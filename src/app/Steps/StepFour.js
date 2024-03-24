// StepFour.js
import React from 'react';
import styles from "@/app/page.module.css";

const StepFour = ({ handleChange, calendlyUrl, twitterUrl, linkedinUrl }) => {
    return (
        <div>
            <div className={styles.inputGroup}>
                <label htmlFor="calendlyUrl">Calendly URL:</label>
                <input
                    id="calendlyUrl"
                    name="calendlyUrl"
                    type="text"
                    placeholder="Enter your Calendly URL"
                    value={calendlyUrl}
                    onChange={handleChange}
                    className={styles.inputField}
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="twitterUrl">Twitter URL:</label>
                <input
                    id="twitterUrl"
                    name="twitterUrl"
                    type="text"
                    placeholder="Enter your Twitter URL"
                    value={twitterUrl}
                    onChange={handleChange}
                    className={styles.inputField}
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="linkedinUrl">LinkedIn URL:</label>
                <input
                    id="linkedinUrl"
                    name="linkedinUrl"
                    type="text"
                    placeholder="Enter your LinkedIn URL"
                    value={linkedinUrl}
                    onChange={handleChange}
                    className={styles.inputField}
                />
            </div>
        </div>
    );
};

export default StepFour;
