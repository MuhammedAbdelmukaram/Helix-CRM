import React, {useRef, useState} from 'react';
import styles from "@/app/page.module.css";
import {remove} from "next/dist/build/webpack/loaders/resolve-url-loader/lib/file-protocol";

const StepThree = ({ handleChange, offerDetails,handleFileUpload }) => {
    // State to store multiple offer entries
    const [offers, setOffers] = useState(offerDetails || [{ offerName: '', company: '', triage: '', avgOfferValue: '', numberOfCloses: '' }]);

    const fileInputRefTwo = useRef();
    const handleOfferChange = (index, event) => {
        const { name, value } = event.target;
        const newOffers = [...offers];
        newOffers[index][name] = value;
        setOffers(newOffers);
    };

    // Add a new offer entry
    const addOffer = () => {
        setOffers([...offers, { offerName: '', company: '', triage: '', avgOfferValue: '', numberOfCloses: '' }]);
    };

    const handleBrowseFilesClick = (e) => {
        e.preventDefault(); // Prevent form submission
        fileInputRefTwo.current.click(); // Trigger the file input click
    };
    // Remove an offer entry
    const removeOffer = (index) => {
        const newOffers = [...offers];
        newOffers.splice(index, 1);
        setOffers(newOffers);
    };

    return (
        <div>
            <label className={styles.fileUploadLabel}>Add 3 Sales Call Examples (Recommended)</label>
            <div className={styles.fileUploadContainer}>
                <input
                    ref={fileInputRefTwo}
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
            {offers.map((offer, index) => (
                <div key={index} className={styles.workExperienceBlock}>
                    {offers.length > 1 && (
                        <button
                            type="button"
                            className={styles.removeButton}
                            onClick={() => removeOffer(index)}
                        >
                            X
                        </button>
                    )}
                    <div className={styles.inputRow}>
                        <label htmlFor={`company-${index}`} className={styles.inputLabel}>Offer Name:</label>
                    <input
                        type="text"
                        name="offerName"
                        placeholder="Offer Name"
                        value={offer.offerName}
                        onChange={(e) => handleOfferChange(index, e)}
                    />

                    </div>

                        <div className={styles.inputRow}>
                            <label htmlFor={`company-${index}`} className={styles.inputLabel}>Company:</label>
                    <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={offer.company}
                        onChange={(e) => handleOfferChange(index, e)}
                    />

                        </div>

                            <div className={styles.inputRow}>
                                <label htmlFor={`company-${index}`} className={styles.inputLabel}>Triage</label>
                    <input
                        type="text"
                        name="triage"
                        placeholder="Triage"
                        value={offer.triage}
                        onChange={(e) => handleOfferChange(index, e)}
                    />

                            </div>

                                <div className={styles.inputRow}>
                                    <label htmlFor={`company-${index}`} className={styles.inputLabel}>Avg Offer Val.</label>
                    <input
                        type="text"
                        name="avgOfferValue"
                        placeholder="Avg Offer Value"
                        value={offer.avgOfferValue}
                        onChange={(e) => handleOfferChange(index, e)}
                    />

                                </div>

                                    <div className={styles.inputRow}>
                                        <label htmlFor={`company-${index}`} className={styles.inputLabel}>No. of closes</label>
                    <input
                        type="text"
                        name="numberOfCloses"
                        placeholder="Number of Closes"
                        value={offer.numberOfCloses}
                        onChange={(e) => handleOfferChange(index, e)}
                    />

                                    </div>
                </div>
            ))}
            <button className={styles.addButton} type="button" onClick={addOffer}></button>
        </div>
    );
};

export default StepThree;
