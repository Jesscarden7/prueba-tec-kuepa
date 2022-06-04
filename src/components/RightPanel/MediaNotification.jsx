import React from 'react';
import styles from "./rightPanel.module.css"
import { FaWhatsapp } from "react-icons/fa";

function MediaNotification({name, time}) {
    return ( 
        <section className={styles.notificationPanel}>
            <div className={styles.notificationCard}>
                <div className={styles.mediaCard}>
                    <i className={styles.wspIcon}>
                        <FaWhatsapp color='white' fontSize={11}/>
                    </i>
                    <span className={styles.media}>WHATSAPP</span>
                </div>
                <div className={styles.dataCard}>
                    <p className={styles.nName}>{name}</p>
                    <p className={styles.nTime}>{time} min ago</p>
                </div>
            </div>
        </section>
     );
}

export default MediaNotification;
