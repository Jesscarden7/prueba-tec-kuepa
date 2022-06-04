import React from "react";
import ConnectionTable from "./ConnectionTable";
import Schedule from "./Schedule";
import styles from "./main.module.css";



function DailyPlanning() {
    return ( 
        <div className={styles.planningContainer}>
            <ConnectionTable/>
            <Schedule/>
        </div>
     );
}

export default DailyPlanning;