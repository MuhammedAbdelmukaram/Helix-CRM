import React, {useRef, useState} from 'react';
import styles from "@/app/page.module.css";

const StepTwo = ({ handleChange, handleCheckboxChange, professionalRoles, aboutMe, handleFileUpload }) => {

    const fileInputRef = useRef();


    // State to store multiple work experiences
    const [workExperiences, setWorkExperiences] = useState([
        { company: '', startDate: '', endDate: '' },
    ]);

    const handleBrowseFilesClick = (e) => {
        e.preventDefault(); // Prevent form submission
        fileInputRef.current.click(); // Trigger the file input click
    };

    // Handle dynamic field changes
    const handleWorkExperienceChange = (index, event) => {
        const { name, value } = event.target;
        const newWorkExperiences = [...workExperiences];
        newWorkExperiences[index][name] = value;
        setWorkExperiences(newWorkExperiences);
    };

    // Add a new work experience entry
    const addWorkExperience = () => {
        setWorkExperiences([...workExperiences, { company: '', startDate: '', endDate: '' }]);
    };

    // Remove a work experience entry
    const removeWorkExperience = (index) => {
        const newWorkExperiences = [...workExperiences];
        newWorkExperiences.splice(index, 1);
        setWorkExperiences(newWorkExperiences);
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

            <label className={styles.fileUploadLabel}>Work Experience</label>
            {workExperiences.map((experience, index) => (
                <div key={index} className={styles.workExperienceBlock}>
                    {workExperiences.length > 1 && (
                        <button
                            type="button"
                            className={styles.removeButton}
                            onClick={() => removeWorkExperience(index)}
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
                            onChange={(e) => handleWorkExperienceChange(index, e)}
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
                            onChange={(e) => handleWorkExperienceChange(index, e)}
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
                            onChange={(e) => handleWorkExperienceChange(index, e)}
                            className={styles.inputField}
                        />
                    </div>
                </div>
            ))}
            <button className={styles.addButton} type="button" onClick={addWorkExperience}></button>
        </div>
    );
};


export default StepTwo;
