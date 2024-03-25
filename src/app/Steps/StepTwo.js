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
                     calls
                 }) => {

    const fileInputRef = useRef();


    const timezoneOptions = [
        {value: "UTC-12", label: "UTC-12:00 Baker Island (U.S.)"},
        {value: "UTC-11", label: "UTC-11:00 American Samoa"},
        {value: "UTC-10", label: "UTC-10:00 Hawaii (U.S.)"},
        {value: "UTC-9:30", label: "UTC-9:30 Marquesas Islands (French Polynesia)"},
        {value: "UTC-9", label: "UTC-9:00 Alaska (U.S.)"},
        {value: "UTC-8", label: "UTC-8:00 Pacific Time (U.S. and Canada)"},
        {value: "UTC-7", label: "UTC-7:00 Mountain Time (U.S. and Canada)"},
        {value: "UTC-6", label: "UTC-6:00 Central Time (U.S. and Canada), Mexico City"},
        {value: "UTC-5", label: "UTC-5:00 Eastern Time (U.S. and Canada), Lima (Peru)"},
        {value: "UTC-4", label: "UTC-4:00 Atlantic Time (Canada), Caracas (Venezuela)"},
        {value: "UTC-3:30", label: "UTC-3:30 Newfoundland and Labrador (Canada)"},
        {value: "UTC-3", label: "UTC-3:00 Buenos Aires (Argentina), Montevideo (Uruguay)"},
        {value: "UTC-2", label: "UTC-2:00 South Georgia/South Sandwich Islands"},
        {value: "UTC-1", label: "UTC-1:00 Azores (Portugal), Cape Verde"},
        {value: "UTC+0", label: "UTC+0:00 Greenwich Mean Time (GMT), Reykjavik (Iceland)"},
        {value: "UTC+1", label: "UTC+1:00 Central European Time (CET), Lagos (Nigeria)"},
        {value: "UTC+2", label: "UTC+2:00 Eastern European Time (EET), Cairo (Egypt)"},
        {value: "UTC+3", label: "UTC+3:00 Moscow Time (Russia), Nairobi (Kenya)"},
        {value: "UTC+3:30", label: "UTC+3:30 Tehran (Iran)"},
        {value: "UTC+4", label: "UTC+4:00 Dubai (UAE), Baku (Azerbaijan)"},
        {value: "UTC+4:30", label: "UTC+4:30 Kabul (Afghanistan)"},
        {value: "UTC+5", label: "UTC+5:00 Tashkent (Uzbekistan), Karachi (Pakistan)"},
        {value: "UTC+5:30", label: "UTC+5:30 Indian Standard Time (India), Colombo (Sri Lanka)"},
        {value: "UTC+5:45", label: "UTC+5:45 Kathmandu (Nepal)"},
        {value: "UTC+6", label: "UTC+6:00 Almaty (Kazakhstan), Dhaka (Bangladesh)"},
        {value: "UTC+6:30", label: "UTC+6:30 Yangon (Myanmar)"},
        {value: "UTC+7", label: "UTC+7:00 Bangkok (Thailand), Hanoi (Vietnam), Jakarta (Indonesia)"},
        {value: "UTC+8", label: "UTC+8:00 Beijing (China), Perth (Australia), Singapore"},
        {value: "UTC+8:45", label: "UTC+8:45 Eucla (Australia)"},
        {value: "UTC+9", label: "UTC+9:00 Tokyo (Japan), Seoul (South Korea)"},
        {value: "UTC+9:30", label: "UTC+9:30 Central Australia"},
        {value: "UTC+10", label: "UTC+10:00 Eastern Australia, Port Moresby (Papua New Guinea)"},
        {value: "UTC+10:30", label: "UTC+10:30 Lord Howe Island (Australia)"},
        {value: "UTC+11", label: "UTC+11:00 Solomon Islands, Vanuatu"},
        {value: "UTC+12", label: "UTC+12:00 Auckland (New Zealand), Suva (Fiji)"},
        {value: "UTC+12:45", label: "UTC+12:45 Chatham Islands (New Zealand)"},
        {value: "UTC+13", label: "UTC+13:00 Samoa, Tonga"},
        {value: "UTC+14", label: "UTC+14:00 Line Islands (Kiribati)"}
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
                >
                    <option value="" disabled>Select hours</option>
                    <option value="1h-3h">1h-3h</option>
                    <option value="3h-5h">3h-5h</option>
                    <option value="5h-8h">5h-8h</option>
                    <option value="8h+">8h+</option>
                </select>
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="calls">How many calls over day can you take?</label>
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

            <div className={styles.checkboxGroup}>
                <p style={{marginBottom: "0.8rem", fontSize: 12, fontWeight: "bold"}}>What role do you have the most sales experience in?</p>
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
