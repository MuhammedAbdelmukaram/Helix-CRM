import React from "react";
import Header from "@/app/components/Common/Header";
import Filters from "@/app/sections/Filters/Filters";
import ProfileBoxes from "@/app/sections/ProfileBoxes/ProfileBoxes";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className={styles.mainContent}>
        <Filters />
        <ProfileBoxes />
      </div>
    </div>
  );
};

export default Dashboard;
