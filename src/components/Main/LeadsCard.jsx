import React from "react";
import styles from "./main.module.css";
import { MdOutlinePhone, MdOutlineMessage} from "react-icons/md";

function LeadsCard({color1, color2}) {
    const cardStyle = {
        backgroundColor:  color1,
        backgroundImage: `linear-gradient(${color1}, ${color2})`,
        color: color2
    };

    return ( 
        <section className={styles.card}>
            <div style={cardStyle} className={styles.numberCard}>
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