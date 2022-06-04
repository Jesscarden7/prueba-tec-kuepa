import React, {useEffect, useState} from 'react';
import MediaNotification from './MediaNotification';
import styles from "./rightPanel.module.css"
import {data} from '../data';

function RightPanel() {
    const [notifications, setNotifications] = useState([]); 
    useEffect(() => {
        setNotifications(data)
    }, [])
    return (
        <section className={styles.rightMenu}>
            {notifications.length > 0 ?
             notifications.map(notification => 
             {return <MediaNotification/>} 
             )
             : null
             }
        </section>
    );
}

export default RightPanel;