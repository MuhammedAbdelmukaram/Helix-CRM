"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import StepOne from "@/app/Steps/StepOne";
import StepTwo from "@/app/Steps/StepTwo"; // Make sure to create this CSS module

const StepForm = () => {
    const [age, setAge] = useState('');
    const [language, setLanguage] = useState('');
    const [niche, setNiche] = useState('');
    const [experience, setExperience] = useState('');
    const [calls, setCalls] = useState('');
    // In the StepForm component
    const [professionalRoles, setProfessionalRoles] = useState([
        { role: 'DM Setter', selected: false },
        { role: 'Closer', selected: false },
        { role: 'Inbound Dialer', selected: false },
        { role: 'Outbound Dialer', selected: false },
        // ...add more roles as needed
    ]);

    const [aboutMe, setAboutMe] = useState('');
    const [aboutMeFile, setAboutMeFile] = useState(null);

    const totalSteps = 5;

    const languageOptions = ['English', 'Spanish', 'French', ];
    const nicheOptions = ['Technology', 'Healthcare', 'Education', ];
    const experienceOptions = ['1-2 years', '3-5 years', '5+ years',];
    const callsOptions = ['0-5 calls', '6-10 calls', '10-15 calls', '16-20 calls',];

    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        age: '',
        language: '',
        niche: '',
        experience: '',
        calls: '',
        professionalRoles: {}, // This will hold the roles selected
        aboutMe: '',
        aboutMeFile: null,
    });

    const stepTitles = [
        'Set Up Your Profile',
        'Your Work Experience',
        'Elevate your profile',
        'You are almost there...',
        'Complete Registration'
        // ... as many titles as there are steps
    ];


    const handleSubmit = (event) => {
        event.preventDefault();
        const stepData = {
            ...formData,
            professionalRoles,
            aboutMe,
            aboutMeFile
        };

        if (currentStep < totalSteps - 1) {
            console.log("Current Step Data:", stepData);
            setCurrentStep(currentStep + 1);
        } else {
            console.log("Final Submission Data:", stepData);
            // Here, you might send the data to a backend server
        }

        // Update formData state if necessary
        setFormData(stepData);
    };


    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "aboutMe") {
            setAboutMe(value); // Update the aboutMe state
        } else {
            setFormData({ ...formData, [name]: value }); // Update other formData fields
        }
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setProfessionalRoles(professionalRoles.map(role =>
            role.role === name ? { ...role, selected: checked } : role
        ));
    };


    const handleFileChange = (event) => {
        setAboutMeFile(event.target.files[0]);
    };

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    <StepOne
                        age={formData.age}
                        language={formData.language}
                        niche={formData.niche}
                        experience={formData.experience}
                        calls={formData.calls}
                        handleChange={handleChange} // Correctly pass handleChange here
                        languageOptions={languageOptions}
                        nicheOptions={nicheOptions}
                        experienceOptions={experienceOptions}
                        callsOptions={callsOptions}
                    />
                );
            case 1:
                return <StepTwo
                    professionalRoles={professionalRoles}
                    aboutMe={aboutMe}
                    handleChange={handleChange}
                    handleCheckboxChange={handleCheckboxChange}
                    handleFileChange={handleFileChange}
                />;
            default:
                return null;
        }
    };

    // Function to render step indicators
    const renderStepIndicators = () => {
        return [...Array(totalSteps).keys()].map((step) => (
            <div
                key={step}
                className={`${styles.stepIndicator} ${step === currentStep ? styles.activeStep : ''}`}
            />
        ));
    };


    return (
        <div className={styles.container}>
            <div className={styles.stepIndicators}>{renderStepIndicators()}</div>
            <h1 className={styles.heading}>{stepTitles[currentStep]}</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                {renderStep()}
                <div className={styles.submitGroup}>
                    <button type="submit" className={styles.nextButton}>
                        {currentStep === totalSteps - 1 ? 'Submit' : 'Next'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StepForm;
