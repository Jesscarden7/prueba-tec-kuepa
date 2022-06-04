import React from "react";
import styles from "./main.module.css";
import { MdOutlinePhone, MdOutlineMessage} from "react-icons/md";

function LeadsCard() {
    return ( 
        <section className={styles.card}>
            <div className={styles.numberCard}>
                <div>30</div>
            </div>
            <div className={styles.contact}>
                <p>Leads de primer contacto</p>
                <p> <MdOutlinePhone/> 15</p>
                <p> <MdOutlineMessage/> 15</p>
            </div>
        </section>
     );
}

export default LeadsCard;