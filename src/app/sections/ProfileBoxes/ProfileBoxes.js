import React, { useState } from 'react';
import styles from './ProfileBoxes.module.css';
import ProfileCard from "../../components/Common/ProfileCard.js"; // Ensure this is the correct path

// Mocked array of profiles for the example, replace with your actual data source
const profiles = new Array(24).fill(null).map((_, index) => ({
    imageUrl: "/profilePic.jpg",
    name: "John",
    surname: `Doe ${index + 1}`,
    location: "New York, USA",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    language: "English",
    experience: `${5 + index} years`,
    niche: "Info-product",
    amountClosed: "$500k-$1m"
}));

const ProfileBoxes = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const profilesPerPage = 8;

    // Calculate the indexes for slicing the profiles array
    const indexOfLastProfile = currentPage * profilesPerPage;
    const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
    const currentProfiles = profiles.slice(indexOfFirstProfile, indexOfLastProfile);

    // Change page handler
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Total pages
    const totalPages = Math.ceil(profiles.length / profilesPerPage);

    return (
        <div className={styles.profileBoxes}>
            <p>We’ve found {profiles.length} sales reps that matched your requirements</p>
            {currentProfiles.map((profile, index) => (
                <ProfileCard key={index} {...profile} />
            ))}
            <div className={styles.pagination}>
                {[...Array(totalPages)].map((_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? styles.active : ''}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProfileBoxes;
