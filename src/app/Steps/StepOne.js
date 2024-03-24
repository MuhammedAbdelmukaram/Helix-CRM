import React from 'react';
import styles from "@/app/page.module.css";


const StepOne = ({
                     age,
                     language,
                     niche,
                     experience,
                     calls,
                     city,
                     country,
                     setFormData,
                     handleChange,
                     languageOptions,
                     nicheOptions,
                     experienceOptions,
                     callsOptions,
                     handleSubmit, // If you need to handle submit inside StepOne
                 }) => {


    return (
        <div>

            <div className={styles.inputGroup}>
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Your age"
                    value={age}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="city">City</label>
                <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Your City"
                    value={city} // Adjusted to use formData.city
                    onChange={handleChange}
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="country">Country</label>
                <input
                    id="country"
                    name="country"
                    type="text"
                    placeholder="Your Country"
                    value={country} // Adjusted to use formData.country
                    onChange={handleChange}
                />
            </div>


            <div className={styles.inputGroup}>
                <label htmlFor="language">Language</label>
                <select
                    id="language"
                    name="language"
                    value={language}
                    onChange={handleChange}
                    className={language ? "selected-option" : "select-placeholder"} // This line applies the class conditionally
                >
                    <option value="" className="select-placeholder">Select language</option>
                    {languageOptions.map((lang) => (
                        <option key={lang} value={lang}>{lang}</option>
                    ))}
                </select>
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="niche">Niche</label>
                <select
                    id="niche"
                    name="niche"
                    value={niche}
                    onChange={handleChange}
                >
                    <option value="" className="select-placeholder">Select niche</option>
                    {nicheOptions.map((nich) => (
                        <option key={nich} value={nich}>{nich}</option>
                    ))}
                </select>
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="experience">Experience</label>
                <select
                    id="experience"
                    name="experience"
                    value={experience}
                    onChange={handleChange}
                >
                    <option value="" className="select-placeholder">Select years</option>
                    {experienceOptions.map((exp) => (
                        <option key={exp} value={exp}>{exp}</option>
                    ))}
                </select>
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="calls">Avg daily calls</label>
                <select
                    id="calls"
                    name="calls"
                    value={calls}
                    onChange={handleChange}
                >
                    <option value="" className="select-placeholder">Select calls range</option>
                    {callsOptions.map((call) => (
                        <option key={call} value={call}>{call}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default StepOne;