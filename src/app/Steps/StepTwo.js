import React, {useRef, useState} from 'react';
import styles from "@/app/page.module.css";


const StepTwo = ({
                     handleChange,
                     handleCheckboxChange,
                     professionalRoles,
                     timezone,
                     setTimezone,
                     workHours,
                     setWorkHours,
                     desiredProfessionalRoles,
                     numCompanies,
                     aboutMe,
                     amountClosed,
                     handleFileUpload,
                     workExperiences,
                     onWorkExperienceChange,
                     onAddWorkExperience,
                     onRemoveWorkExperience,
                     callsOptions,
                     calls,
                     setWorkExperiences
                 }) => {

    const fileInputRef = useRef();

    const handleCurrentWorkCheckboxChange = (index, event) => {
        const updatedExperiences = [...workExperiences];
        if (event.target.checked) {
            updatedExperiences[index].endDate = 'Present';
        } else {
            // Optionally clear the endDate or set it to a default value
            updatedExperiences[index].endDate = '';
        }
        setWorkExperiences(updatedExperiences);
    };


    const timezoneOptions = [
        {value: "US", label: "US"},
        {value: "UK", label: "UK"},
        {value: "Europe", label: "Europe"},
        {value: "Australian", label: "Australian"},
        {value: "Flexible", label: "Im Flexible"},
    ];


    const handleBrowseFilesClick = (e) => {
        e.preventDefault(); // Prevent form submission
        fileInputRef.current.click(); // Trigger the file input click
    };


    return (
        <div>
            <div className={styles.inputGroup}>
                <label htmlFor="timezone">Timezone</label>
                <select
                    id="timezone"
                    name="timezone"
                    value={timezone}
                    onChange={handleChange} // Assuming handleChange can handle generic changes
                    className="selected-option"
                    required={true}
                >
                    <option value="" disabled>Select your timezone</option>
                    {timezoneOptions.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>

            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="workHours">How many hours per day can you work?</label>
                <select
                    id="workHours"
                    name="workHours"
                    value={workHours}
                    onChange={handleChange}
                    className="selected-option"
                    required={true}
                >
                    <option value="" disabled>Select hours</option>
                    <option value="1h-3h">1h-3h</option>
                    <option value="3h-5h">3h-5h</option>
                    <option value="5h-8h">5h-8h</option>
                    <option value="8h+">8h+</option>
                </select>
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="calls">How many calls a day can you take?</label>
                <select
                    id="calls"
                    name="calls"
                    value={calls}
                    onChange={handleChange}
                    required={true}
                >
                    <option value="" className="select-placeholder">Select calls range</option>
                    {callsOptions.map((call) => (
                        <option key={call} value={call}>{call}</option>
                    ))}
                </select>
            </div>

            <div className={styles.checkboxGroupFirst}>
                <p style={{marginBottom: "0.8rem", fontSize: 12, fontWeight: "bold"}}>What role do you have the most
                    sales experience in?</p>
                {professionalRoles.map((roleObj, index) => (
                    <label className={styles.checkboxLabel} key={index}>
                        <input
                            type="checkbox"
                            name={roleObj.role}
                            checked={roleObj.selected}
                            onChange={(e) => handleCheckboxChange(e, "professional")}
                            className={styles.checkbox}
                        />
                        {roleObj.role}
                    </label>
                ))}
            </div>

            <div className={styles.checkboxGroup}>
                <p style={{marginBottom: "0.8rem", fontSize: 12, fontWeight: "bold"}}>
                    What desired role are you looking for?
                </p>
                {desiredProfessionalRoles.map((roleObj, index) => (
                    <label className={styles.checkboxLabel} key={index}>
                        <input
                            type="checkbox"
                            name={roleObj.role}
                            checked={roleObj.selected}
                            onChange={(e) => handleCheckboxChange(e, "desired")}
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

            {/*<div className={styles.inputGroup}>*/}
            {/*    <label htmlFor="numCompanies">Companies Worked For</label>*/}
            {/*    <input*/}
            {/*        id="numCompanies"*/}
            {/*        name="numCompanies"*/}
            {/*        type="number" // Assuming you want a numeric input*/}
            {/*        placeholder="Enter number"*/}
            {/*        value={numCompanies}*/}
            {/*        onChange={handleChange}*/}
            {/*        className={styles.inputField}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<label className={styles.fileUploadLabel}>Add VSL - About me</label>*/}
            {/*<div className={styles.fileUploadContainer}>
                <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileUpload}
                    className={styles.fileInput}
                    style={{display: 'none'}} // Hide the input element
                />
                <p className={styles.dragDropText}>Drag and drop files here</p>
                <p style={{marginBottom: 20, marginTop: 20}}>OR</p>
                <button
                    onClick={handleBrowseFilesClick}
                    className={styles.browseFilesButton}
                    type="button" // Make sure this is a button, not a submit input
                >
                    Browse Files
                </button>
            </div>*/}

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
                        <label htmlFor={`role-${index}`} className={styles.inputLabel}>Role:</label>
                        <input
                            id={`role-${index}`}
                            type="text"
                            name="role"
                            value={experience.role}
                            onChange={(e) => onWorkExperienceChange(index, e)}
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.inputRow}>
                        <label htmlFor={`responsibilities-${index}`}
                               className={styles.inputLabel}>Responsibilities:</label>
                        <textarea
                            id={`responsibilities-${index}`}
                            name="responsibilities"
                            value={experience.responsibilities}
                            style={{resize: "vertical", width: 174}}
                            onChange={(e) => onWorkExperienceChange(index, e)}
                            className={styles.inputFieldTextBox}
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
                            type="month"
                            name="endDate"
                            value={experience.endDate !== 'Present' ? experience.endDate : ''}
                            onChange={(e) => onWorkExperienceChange(index, e)}
                            className={styles.inputField}
                            disabled={experience.endDate === 'Present'}
                        />
                    </div>
                    <div className={styles.inputRow}>
                        <label className={styles.checkboxLabelWorkingPresent}>

                            Currently working here
                            <input
                                type="checkbox"
                                name="isCurrent"
                                checked={experience.endDate === 'Present'}
                                onChange={(e) => handleCurrentWorkCheckboxChange(index, e)}
                                className={styles.checkboxWorkingHere}
                            />
                        </label>
                    </div>
                </div>
            ))}
            <button className={styles.addButton} type="button" onClick={onAddWorkExperience}>
            </button>

            {/*<div className={styles.inputGroup}>*/}
            {/*    <label htmlFor="amountClosed">Amount Closed</label>*/}
            {/*    <select*/}
            {/*        id="amountClosed"*/}
            {/*        name="amountClosed"*/}
            {/*        value={amountClosed}*/}
            {/*        onChange={handleChange}*/}
            {/*        className={amountClosed ? "selected-option" : "select-placeholder"}*/}
            {/*    >*/}
            {/*        <option value="" disabled>Select Amount Closed</option>*/}
            {/*        <option value="0-100k">0 - $100k</option>*/}
            {/*        <option value="100k-250k">$100k - $250k</option>*/}
            {/*        <option value="250k-500k">$250k - $500k</option>*/}
            {/*        <option value="500k-1M">$500k - $1M</option>*/}
            {/*        <option value="1M-3M">$1M - $3M</option>*/}
            {/*        <option value="3M-5M">$3M - $5M</option>*/}
            {/*        <option value="5M-7M">$5M - $7M</option>*/}
            {/*        <option value="7M-9M">$7M - $9M</option>*/}
            {/*        <option value="9M-11M">$9M - $11M</option>*/}
            {/*        <option value="11M+">$11M+</option>*/}
            {/*    </select>*/}
            {/*</div>*/}


        </div>
    );
};


export default StepTwo;
