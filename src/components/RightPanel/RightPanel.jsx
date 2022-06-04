import React, {useEffect, useState} from 'react';
import MediaNotification from './MediaNotification';
import styles from "./rightPanel.module.css"


function RightPanel() {

    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        fetch("https://api.opendota.com/api/proPlayers")
        .then(res => res.json())
        .then((data) => {
            setNotifications(data.slice(0,15))
        }).catch((err) => {console.error(err);});
    }, []);
    return (
        <section className={styles.rightMenu}>
            {notifications.length > 0 ?
             notifications.map(notification => 
                 {
                     return <MediaNotification key={notification.account_id} name = {notification.name} time ={notification.fantasy_role}/>
                 } 
             )
             : <div> Loading... </div>
             }
        </section>
    );
}

export default RightPanel;