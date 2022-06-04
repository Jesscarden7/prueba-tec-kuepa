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
                <LeadsCard color1="#ad83f6" color2="#84b6fa" />
                <LeadsCard color1="#047e94" color2="#74fad3"/>
                <LeadsCard color1="#b34591" color2="#ef5e79"/>
            </div>
        </section>
     );
}

export default Schedule;