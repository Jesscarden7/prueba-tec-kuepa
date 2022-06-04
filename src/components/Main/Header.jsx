import React from "react";
import { TbSearch } from "react-icons/tb";
import styles from  "./main.module.css"

function Header() {
    const todayDate = (new Date()).toString().split(' ').splice(1,3).join(' ');
    return ( 
        <header className={styles.header}>
            <div>
                <form action="/" method="get">
                    <div className={styles.searchContainer}>
                        <div><TbSearch/></div>
                        <input type="text" placeholder="Search..." className={styles.search}/> 
                    </div>
                </form>
            </div>
            <div className={styles.date}>
                <span>{todayDate}</span>
            </div>
        </header>
     );
}

export default Header;