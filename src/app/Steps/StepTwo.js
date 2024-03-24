import React, {useRef, useState} from 'react';
import styles from "@/app/page.module.css";

const StepTwo = ({ handleChange, handleCheckboxChange, professionalRoles, numCompanies,aboutMe, amountClosed, handleFileUpload, workExperiences,onWorkExperienceChange,onAddWorkExperience, onRemoveWorkExperience }) => {

    const fileInputRef = useRef();




    const handleBrowseFilesClick = (e) => {
        e.preventDefault(); // Prevent form submission
        fileInputRef.current.click(); // Trigger the file input click
    };


    return (
        <div>
            <div className={styles.checkboxGroup}>
                <p style={{marginBottom:"0.8rem", fontSize:12, fontWeight:"bold"}}>Select your professional roles</p>
                {professionalRoles.map((roleObj, index) => (
                    <label className={styles.checkboxLabel} key={index}>
                        <input
                            type="checkbox"
                            name={roleObj.role}
                            checked={roleObj.selected}
                            onChange={handleCheckboxChange}
                            className={styles.checkbox}
                        />
                        {roleObj.role}
                    </label>
                ))}
            </div>
            <div className={styles.textareaGroup}>
                <label htmlFor="aboutMe" className={styles.label}>About Me</label>
                <textarea
                    id="aboutMe"
                    name="aboutMe"
                    placeholder="Highlights of your career"
                    value={aboutMe}
                    onChange={handleChange}
                    className={styles.textarea}
                />
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="numCompanies">Companies Worked For</label>
                <input
                    id="numCompanies"
                    name="numCompanies"
                    type="number" // Assuming you want a numeric input
                    placeholder="Enter number"
                    value={numCompanies}
                    onChange={handleChange}
                    className={styles.inputField}
                />
            </div>
            <label className={styles.fileUploadLabel}>Add VSL - About me</label>
            <div className={styles.fileUploadContainer}>
                <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileUpload}
                    className={styles.fileInput}
                    style={{ display: 'none' }} // Hide the input element
                />
                <p className={styles.dragDropText}>Drag and drop files here</p>
                <p style={{marginBottom:20, marginTop:20}}>OR</p>
                <button
                    onClick={handleBrowseFilesClick}
                    className={styles.browseFilesButton}
                    type="button" // Make sure this is a button, not a submit input
                >
                    Browse Files</button>
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="amountClosed">Amount Closed</label>
                <select
                    id="amountClosed"
                    name="amountClosed"
                    value={amountClosed}
                    onChange={handleChange}
                    className={amountClosed ? "selected-option" : "select-placeholder"}
                >
                    <option value="" disabled>Select Amount Closed</option>
                    {/* Update your options as needed */}
                    <option value="0-100000">0 - $100,000</option>
                    <option value="100001-500000">$100,001 - $500,000</option>
                    <option value="500001-1000000">$500,001 - $1,000,000</option>
                    <option value="1000001-5000000">$1,000,001 - $5,000,000</option>
                    <option value="5000001+">$5,000,001+</option>
                </select>
            </div>


            <label className={styles.fileUploadLabel}>Work Experience</label>
            {workExperiences.map((experience, index) => (
                <div key={index} className={styles.workExperienceBlock}>
                    {workExperiences.length > 1 && (
                        <button
                            type="button"
                            className={styles.removeButton}
                            onClick={() => onRemoveWorkExperience(index)}
                        >
                            X
                        </button>
                    )}
                    <div className={styles.inputRow}>
                        <label htmlFor={`company-${index}`} className={styles.inputLabel}>Company:</label>
                        <input
                            id={`company-${index}`}
                            type="text"
                            name="company"
                            placeholder=""
                            value={experience.company}
                            onChange={(e) => onWorkExperienceChange(index, e)}
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.inputRow}>
                        <label htmlFor={`startDate-${index}`} className={styles.inputLabel}>Start date:</label>
                        <input
                            id={`startDate-${index}`}
                            type="month" // Change type to 'month'
                            name="startDate"
                            value={experience.startDate}
                            onChange={(e) => onWorkExperienceChange(index, e)}
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.inputRow}>
                        <label htmlFor={`endDate-${index}`} className={styles.inputLabel}>End date:</label>
                        <input
                            id={`endDate-${index}`}
                            type="month" // Change type to 'month'
                            name="endDate"
                            value={experience.endDate}
                            onChange={(e) => onWorkExperienceChange(index, e)}
                            className={styles.inputField}
                        />
                    </div>
                </div>
            ))}
            <button className={styles.addButton} type="button" onClick={onAddWorkExperience}>
            </button>
        </div>
    );
};


export default StepTwo;
