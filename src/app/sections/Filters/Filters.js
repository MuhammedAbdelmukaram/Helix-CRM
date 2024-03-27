import React from 'react';
import styles from './Filters.module.css';
import HorizontalLine from "../../components/Common/HorizontalLine.js";
import VerticalLine from "../../components/Common/VerticalLine.js"; // Make sure this path is correct

const Filters = () => {
    return (
        <div className={styles.filters}>
            <h2 className={styles.heading}>Find your perfect Sales Rep</h2>

            <div style={{alignSelf:"center", marginBottom:30}}>
                <HorizontalLine width={"90%"} backgroundColor={"#727272"}/>
            </div>


            <div className={styles.filterSection}>
                <h3 className={styles.filterTitle}>Location:</h3>
                <div className={styles.checkboxGroup}>
                    <label className={styles.checkboxLabel}><input type="checkbox" className={styles.checkboxInput}/>United States</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" className={styles.checkboxInput}/>United Kingdom</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" className={styles.checkboxInput}/>Hungary</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" className={styles.checkboxInput}/>United Emirates</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" className={styles.checkboxInput}/>Italy</label>
                </div>
            </div>

            <div className={styles.filterSection}>
                <h3 className={styles.filterTitle}>Experience:</h3>
                <div className={styles.checkboxGroup}>
                    <label className={styles.checkboxLabel}><input type="checkbox" className={styles.checkboxInput}/>Beginner</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" className={styles.checkboxInput}/>Intermediate</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" className={styles.checkboxInput}/>Expert</label>
                </div>
            </div>

            <div className={styles.filterSection}>
                <h3 className={styles.filterTitle}>Niche:</h3>
                <div className={styles.checkboxGroup}>
                    <label className={styles.checkboxLabel}><input type="checkbox" className={styles.checkboxInput}/>Info-product</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" className={styles.checkboxInput}/>TikTok Ads</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" className={styles.checkboxInput}/>UGC Creatives</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" className={styles.checkboxInput}/>Consulting</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" className={styles.checkboxInput}/>Landing pages</label>
                </div>
            </div>

            <div className={styles.filterSection}>
                <h3 className={styles.filterTitle}>Amount closed:</h3>
                <div className={styles.checkboxGroup}>
                    <label className={styles.checkboxLabel}><input type="checkbox" className={styles.checkboxInput}/>$100k+</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" className={styles.checkboxInput}/>$100k-$250k</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" className={styles.checkboxInput}/>$250k-$500k</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" className={styles.checkboxInput}/>$500k-$1m</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" className={styles.checkboxInput}/>$1m-$5m</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" className={styles.checkboxInput}/>$5m-$10m</label>
                    <label className={styles.checkboxLabel}><input type="checkbox" className={styles.checkboxInput}/>$10m+</label>
                </div>
            </div>
        </div>
    );
};

export default Filters;
