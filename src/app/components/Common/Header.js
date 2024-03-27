import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import styles from "./Header.module.css";
import VerticalLine from "./VerticalLine.js"; // You will create this CSS module file

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <Image
          src="/DFLOGO.png" // Replace with your logo path
          alt="Logo"
          width={95}
          height={28}
          onClick={() => router.push("/dashboard")}
        />
      </div>
      <div className={styles.centerSection}>
        <button
          className={styles.button}
          onClick={() => router.push("/dashboard")}
        >
          Dashboard
        </button>
        <button
          className={styles.button}
          onClick={() => router.push("/myjobs")}
        >
          My Jobs
        </button>
        <button
          className={styles.button}
          onClick={() => router.push("/messages")}
        >
          Messages
        </button>
        <button
          className={styles.button}
          onClick={() => router.push("/bookmarks")}
        >
          Bookmarks
        </button>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Search…" />
          <img src="/search.png" alt="Search" className={styles.searchIcon} />
        </div>

        <div style={{ marginLeft: 20 }}>
          <VerticalLine height={"30px"} backgroundColor={"#575757"} />
        </div>
        <img
          src="/notification.png"
          alt="Notifications"
          className={styles.icon}
          onClick={() => {
            /* handle notification click */
          }}
        />

        <div style={{ marginLeft: 20 }}>
          <VerticalLine height={"30px"} backgroundColor={"#575757"} />
        </div>

        <img
          src="/help.png"
          alt="Notifications"
          className={styles.icon}
          onClick={() => {
            /* handle notification click */
          }}
        />

        <div style={{ marginLeft: 20 }}>
          <VerticalLine height={"30px"} backgroundColor={"#575757"} />
        </div>
        <img
          src="/profile.png"
          alt="Profile"
          className={styles.icon}
          onClick={() => router.push("/profile/1")}
        />
      </div>
    </header>
  );
};

export default Header;
