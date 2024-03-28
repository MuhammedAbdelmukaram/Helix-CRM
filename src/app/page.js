"use client";

import React, { useState } from "react";
import Image from "next/image";
import ISO6391 from "iso-639-1";

import StepOne from "@/app/components/Steps/StepOne";
import StepTwo from "@/app/components/Steps/StepTwo";
import StepThree from "@/app/components/Steps/StepThree";
import StepFour from "@/app/components/Steps/StepFour";
import StepZero from "@/app/components/Steps/StepZero"; // Make sure to create this CSS module
import Indicators from "@/app/components/signup/indicators";

import styles from "@/app/page.module.css";

export default function Page() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [amountClosed, setAmountClosed] = useState("");

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [numCompanies, setNumCompanies] = useState("");
  const [timezone, setTimezone] = useState("");
  const [workHours, setWorkHours] = useState("");

  const [age, setAge] = useState("");
  const [language, setLanguage] = useState("");
  const [niche, setNiche] = useState("");
  const [experience, setExperience] = useState("");
  const [calls, setCalls] = useState("");
  const [workExperiences, setWorkExperiences] = useState([
    {
      company: "",
      startDate: "",
      endDate: "",
      role: "",
      responsibilities: "",
      achievements: "",
    },
  ]);

  const [calendlyUrl, setCalendlyUrl] = useState("");
  const [twitterUrl, setTwitterUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");

  const [passwordsMatch, setPasswordsMatch] = useState(true); // Default to true or false based on your needs

  const handlePasswordMatch = (doMatch) => {
    setPasswordsMatch(doMatch);
  };
  const handleWorkExperienceChange = (index, event) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index][event.target.name] = event.target.value;
    setWorkExperiences(updatedExperiences);
  };

  // Add and remove functions
  const addWorkExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      { company: "", startDate: "", endDate: "" },
    ]);
  };

  const removeWorkExperience = (indexToRemove) => {
    setWorkExperiences(
      workExperiences.filter((_, index) => index !== indexToRemove)
    );
  };

  // Handler to update offerDetails from StepThree
  const handleOfferChange = (index, e) => {
    const updatedOffers = [...offerDetails];
    updatedOffers[index][e.target.name] = e.target.value;
    setOfferDetails(updatedOffers);
  };

  const addOffer = () => {
    setOfferDetails([
      ...offerDetails,
      {
        offerName: "",
        company: "",
        triage: "",
        avgOfferValue: "",
        numberOfCloses: "",
      },
    ]);
  };

  const removeOffer = (index) => {
    const filteredOffers = offerDetails.filter((_, i) => i !== index);
    setOfferDetails(filteredOffers);
  };

  // In the StepForm component
  const [professionalRoles, setProfessionalRoles] = useState([
    { role: "DM Setter", selected: false },
    { role: "Closer", selected: false },
    { role: "Inbound Dialer", selected: false },
    { role: "Outbound Dialer", selected: false },
    { role: "Full Cycle SDR", selected: false },
    { role: "Full Cycle Closer", selected: false },
    { role: "Im just getting started", selected: false },

    // ...add more roles as needed
  ]);

  const [desiredProfessionalRoles, setDesiredProfessionalRoles] = useState([
    { role: "DM Setter", selected: false },
    { role: "Closer", selected: false },
    { role: "Inbound Dialer", selected: false },
    { role: "Outbound Dialer", selected: false },
    { role: "Full Cycle SDR", selected: false },
    { role: "Full Cycle Closer", selected: false },
  ]);

  const [aboutMe, setAboutMe] = useState("");

  const [offerDetails, setOfferDetails] = useState([
    {
      offerName: "",
      company: "",
      triage: "",
      avgOfferValue: "",
      numberOfCloses: "",
    },
  ]);

  const totalSteps = 4;

  const languageOptions = ISO6391.getAllNames();
  const nicheOptions = [
    "B2C info product",
    "B2B info product",
    "B2B Tech",
    "SaaS",
    "Recruitment",
    "Solar",
    "Agencies Services",
    "Door to Door",
    "Print Media",
    "I'm just getting started",
    "Other",
  ];
  const experienceOptions = [
    "I'm just getting started",
    "0-1 years",
    "1-2 years",
    "2-3 years",
    "4-6 years",
    "6+ years",
  ];
  const callsOptions = ["1-3 calls", "3-5 calls", "5-8 calls", "8+ calls"];

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    age: "",
    language: [],
    niche: [],
    amountClosed: "",
    numCompanies: "",
    experience: "",
    calls: "",
    gender: "",
    professionalRoles: {}, // This will hold the roles selected
    desiredProfessionalRoles: {},
    aboutMe: "",
  });

  const stepTitles = [
    "Set Up Your Profile",
    "Your Work Experience",
    "Enhance your profile",
    // 'You are almost there..',
    "Add your socials",
    // ... as many titles as there are steps
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!passwordsMatch) {
      alert(
        "Passwords do not match. Please ensure both passwords are identical."
      );
      return; // Prevent form submission
    }

    if (
      currentStep === 0 &&
      (!name.trim() || !email.trim() || !password.trim() || !phoneNumber.trim())
    ) {
      alert("All fields are required.");
      return; // Stop the submission if any field is empty
    }

    const formattedProfessionalRoles = professionalRoles.map((role) => ({
      role: role.role,
      selected: role.selected,
    }));

    const formattedDesiredProfessionalRoles = desiredProfessionalRoles.map(
      (role) => ({
        role: role.role,
        selected: role.selected,
      })
    );

    // Creating the fullFormData object by combining formData with the directly held state variables
    const fullFormData = {
      ...formData, // Spread operator to include all properties from formData
      name, // Directly held state variables
      email,
      password,
      phoneNumber,
      aboutMe,
      calendlyUrl,
      twitterUrl,
      timezone,
      workHours,
      linkedinUrl,
      instagramUrl,
      professionalRoles: formattedProfessionalRoles,
      desiredProfessionalRoles: formattedDesiredProfessionalRoles,
      workExperiences,
    };

    // Log the final data being sent for submission
    console.log(
      "Final submission data:",
      JSON.stringify(fullFormData, null, 2)
    );

    // Check if it's the final step
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      window?.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Submit the data to the server
      setIsSubmitting(true);
      try {
        const response = await fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            name,
            email,
            password,
            phoneNumber,
            aboutMe,
            calendlyUrl,
            twitterUrl,
            linkedinUrl,
            instagramUrl,
            workHours,
            timezone,
            professionalRoles: professionalRoles.map((role) => ({
              role: role.role,
              selected: role.selected,
            })),
            desiredProfessionalRoles: desiredProfessionalRoles.map((role) => ({
              role: role.role,
              selected: role.selected,
            })),
            workExperiences,
          }),
        });

        const data = await response.json();
        if (!data.success) {
          throw new Error(`HTTP error! status: ${data.status}`);
        }
        console.log("Submission Response:", data);
        setIsSubmitted(true); // Signal successful submission
      } catch (error) {
        console.error("Submission error:", error);
      } finally {
        setIsSubmitting(false); // Ensure this is reset in finally block
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "aboutMe":
        setAboutMe(value);
        break;
      case "calendlyUrl":
        setCalendlyUrl(value);
        break;
      case "twitterUrl":
        setTwitterUrl(value);
        break;
      case "linkedinUrl":
        setLinkedinUrl(value);
        break;
      case "instagramUrl":
        setInstagramUrl(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "timezone":
        setTimezone(value);
        break;
      case "workHours":
        setWorkHours(value);
        break;
      case "name":
        // Assuming you have a state hook for name
        setName(value);
        break;
      default:
        // This will handle other form fields like age, language, etc., that are part of the formData state object
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  const handleCheckboxChange = (event, roleType) => {
    const { name, checked } = event.target;

    if (roleType === "professional") {
      setProfessionalRoles(
        professionalRoles.map((role) =>
          role.role === name ? { ...role, selected: checked } : role
        )
      );
    } else if (roleType === "desired") {
      setDesiredProfessionalRoles(
        desiredProfessionalRoles.map((role) =>
          role.role === name ? { ...role, selected: checked } : role
        )
      );
    }
  };

  const handleFileChange = (event) => {
    setAboutMeFile(event.target.files[0]);
  };

  return (
    <div className={styles.container}>
      {isSubmitted ? (
        <div className={styles.submissionMessageContainer}>
          <h1 className={styles.submissionMessageTitle}>
            Thanks for your submission
          </h1>
          <p className={styles.submissionMessageText}>
            Your profile is being created. You will be notified once it’s
            published on the platform. However, it’s already on our internal
            database that we will actively be hiring from immediately.
          </p>
        </div>
      ) : (
        <>
          <Indicators totalSteps={totalSteps} currentStep={currentStep} />
          <h1 className={styles.heading}>{stepTitles[currentStep]}</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            {[0].includes(currentStep) ? (
              <StepZero
                handleChange={handleChange}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                onPasswordMatch={handlePasswordMatch}
              />
            ) : [1].includes(currentStep) ? (
              <StepOne
                age={formData.age}
                language={formData.language}
                niche={formData.niche}
                experience={formData.experience}
                setFormData={setFormData}
                languageOptions={languageOptions}
                calls={formData.calls}
                city={formData.city}
                gender={formData.gender}
                country={formData.country}
                handleChange={handleChange}
                nicheOptions={nicheOptions}
                amountClosed={formData.amountClosed}
                experienceOptions={experienceOptions}
              />
            ) : [2].includes(currentStep) ? (
              <StepTwo
                professionalRoles={professionalRoles}
                desiredProfessionalRoles={desiredProfessionalRoles}
                aboutMe={aboutMe}
                workExperiences={workExperiences}
                numCompanies={formData.numCompanies}
                amountClosed={formData.amountClosed}
                onWorkExperienceChange={handleWorkExperienceChange}
                onAddWorkExperience={addWorkExperience}
                onRemoveWorkExperience={removeWorkExperience}
                handleChange={handleChange}
                handleCheckboxChange={handleCheckboxChange}
                handleFileChange={handleFileChange}
                timezone={timezone}
                setTimezone={setTimezone}
                workHours={workHours}
                setWorkHours={setWorkHours}
                calls={formData.calls}
                callsOptions={callsOptions}
                setWorkExperiences={setWorkExperiences}
              />
            ) : [3].includes(currentStep) ? (
              <StepFour
                handleChange={handleChange}
                calendlyUrl={calendlyUrl}
                twitterUrl={twitterUrl}
                linkedinUrl={linkedinUrl}
                instagramUrl={instagramUrl}
              />
            ) : null}
            <div className={styles.submitGroup}>
              <button
                type="submit"
                className={styles.nextButton}
                disabled={isSubmitting}
              >
                {currentStep === totalSteps - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
