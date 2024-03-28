"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import styles from "./Header.module.css";
import VerticalLine from "./VerticalLine.js"; // You will create this CSS module file

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <Link href={"/dashboard"} title="Dashboard">
          <Image
            src="/deal-fuel-logo.png" // Replace with your logo path
            alt="Logo"
            width={95}
            height={28}
          />
        </Link>
      </div>
      <div className={styles.centerSection}>
        <Link href={"/dashboard"} title="Dashboard" className={styles.button}>
          Dashboard
        </Link>
        <Link href={"/my-jobs"} title="myjobs" className={styles.button}>
          My Jobs
        </Link>
        <Link href={"/messages"} title="messages" className={styles.button}>
          Messages
        </Link>
        <Link href={"/bookmarks"} title="bookmarks" className={styles.button}>
          Bookmarks
        </Link>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Search…" />
          <Image
            src="/search.png"
            alt="Search"
            className={styles.searchIcon}
            width={24}
            height={24}
          />
        </div>

        <div style={{ marginLeft: 20 }}>
          <VerticalLine height={"30px"} backgroundColor={"#575757"} />
        </div>
        <Image
          src="/notification.png"
          alt="Notifications"
          className={styles.icon}
          width={24}
          height={24}
        />

        <div style={{ marginLeft: 20 }}>
          <VerticalLine height={"30px"} backgroundColor={"#575757"} />
        </div>

        <Image
          src="/help.png"
          alt="Notifications"
          className={styles.icon}
          width={24}
          height={24}
        />

        <div style={{ marginLeft: 20 }}>
          <VerticalLine height={"30px"} backgroundColor={"#575757"} />
        </div>
        <Link href={"/profile/1"} title="My Profile" className={styles.button}>
          <Image
            src="/profile.png"
            alt="Profile"
            className={styles.icon}
            width={24}
            height={24}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
