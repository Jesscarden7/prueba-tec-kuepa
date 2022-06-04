import React from "react";
import LeadsCard from "./LeadsCard";
import styles from "./main.module.css";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";


function Schedule() {
    return ( 
        <section className={styles.cardsPrincipalContainer}>
            <div className={styles.plan}>
                <h3>Tu plan de hoy</h3>
                <p>Ir a la gestion de llamados <MdOutlineKeyboardArrowRight/></p>
            </div>
            <div className={styles.leadsCardContainer}>
                <LeadsCard/>
                <LeadsCard/>
                <LeadsCard/>
            </div>
        </section>
     );
}

export default Schedule;