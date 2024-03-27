"use client";
import React, { useRef, useState } from "react";
import Header from "@/app/components/Common/Header";
import styles from "./Profile.module.css";
import VerticalLine from "@/app/components/Common/VerticalLine"; // Make sure you have this CSS file
import Image from "next/image";

const Profile = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className={styles.profileContainer}>
      <Header />

      <div
        style={{
          display: "flex",
          gap: 30,
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Image
          src="/profile.webp"
          width={232}
          height={232}
          alt="Picture of the author"
          style={{ borderRadius: 8 }}
        />
        <div className={styles.introSection}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <div className={styles.leftSideProfile}>
              <p style={{ fontSize: 24, textAlign: "left" }}>Name Surname</p>
              <p style={{ textAlign: "left", fontSize: 12 }}>Setter, Closer</p>

              <div className={styles.imageText}>
                <Image
                  src="/emailIcon.png"
                  width={16}
                  height={16}
                  alt="Picture of the author"
                />
                <p style={{ fontSize: 12 }}>Email</p>
              </div>

              <div className={styles.imageText}>
                <Image
                  src="/companyIcon.png"
                  width={16}
                  height={16}
                  alt="Picture of the author"
                />
                <p style={{ fontSize: 12 }}>Email</p>
              </div>
              <div className={styles.buttonsContainer}>
                <button className={styles.profileButton}>Message</button>
                <button className={styles.profileButtonTwo}>
                  Book a Meeting
                </button>
              </div>
            </div>

            <div style={{ marginLeft: 250, marginRight: 30 }}>
              <VerticalLine />
            </div>

            <div className={styles.rightSideProfile}>
              <div
                style={{
                  textAlign: "left",
                  fontWeight: "bold",
                  fontSize: 12,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <p>Calls per day:</p>
                <p>Age:</p>
                <p>Languages:</p>
                <p>Years experience:</p>
                <p>Niche:</p>
              </div>

              <div
                style={{
                  textAlign: "left",
                  display: "flex",
                  fontSize: 12,
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <p>12</p>
                <p>23</p>
                <p>English, Bosnian, Croatian</p>
                <p>6</p>
                <p>Info, Saas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.statsSection}>
        <div className={styles.stat}>
          <h2>8+</h2>
          <p>Years in sales</p>
        </div>
        <div className={styles.stat}>
          <h2>$10m+</h2>
          <p>Worth of deals closed</p>
        </div>
        <div className={styles.stat}>
          <h2>20+</h2>
          <p>Companies Ive closed for</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
