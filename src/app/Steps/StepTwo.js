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
                <label>Select your professional roles</label>
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
            <div className={styles.fileUploadContainer}>
                <label className={styles.fileUploadLabel}>Add VSL - About me</label>
                <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileUpload}
                    className={styles.fileInput}
                    style={{ display: 'none' }} // Hide the input element
                />
                <p className={styles.dragDropText}>Drag and drop files here</p>
                <button
                    onClick={handleBrowseFilesClick}
                    className={styles.browseFilesButton}
                    type="button" // Make sure this is a button, not a submit input
                >
                    Browse Files</button>
            </div>
        </div>
    );
};


export default StepTwo;
