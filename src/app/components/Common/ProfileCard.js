import React from 'react';
import PropTypes from 'prop-types'; // For prop types validation
import styles from './ProfileCard.module.css';
import Bullet from "./Bullet.js"; // Ensure this CSS module file is created

const ProfileCard = ({name, surname, location, bio, language, experience, niche, amountClosed, imageUrl}) => {
    return (
        <div className={styles.profile}>


            <div className={styles.upperSection}>
                <img src={imageUrl} alt={`${name} ${surname}`} className={styles.profilePic}/>
                <div className={styles.upperSectionTexts}>
                    <div className={styles.upperSectionHeader}>
                        <div className={styles.nameAndLocation}>
                            <h3 className={styles.name}>{name} {surname}</h3>
                            <div className={styles.locationWrapper}>
                                <img src={"/location.png"} alt="Location" className={styles.icon}/>
                                <p className={styles.location}>{location}</p>
                            </div>
                        </div>
                        <img src={"/bookmark.png"} alt="Bookmark" className={styles.bookmarkIcon}/>
                    </div>
                    <p className={styles.bio}>{bio}</p>
                </div>
            </div>


            <div className={styles.info}>
                <Bullet type={"Language"} value={"English"}/>
                <Bullet type={"Experience"} value={experience}/>
                <Bullet type={"Niche"} value={niche}/>
                <Bullet type={"Amount closed"} value={amountClosed}/>
            </div>

            <button className={styles.hireButton}>Hire Rep</button>
            {/* This is the new button */}
        </div>
    );
};

// PropTypes for type checking
ProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    niche: PropTypes.string.isRequired,
    amountClosed: PropTypes.string.isRequired,
    imageUrl: PropTypes.string // imageUrl is optional, could be required based on your needs
};

export default ProfileCard;
