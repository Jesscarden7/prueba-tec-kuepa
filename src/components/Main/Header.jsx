import React from "react";
import { TbSearch } from "react-icons/tb";
import styles from  "./main.module.css"

function Header() {
    const todayDate = (new Date()).toString().split(' ').splice(1,3).join(' ');
    return ( 
        <header className={styles.header}>
            <div>
                <form action="/" method="get">
                    <div>
                        <TbSearch/>
                        <input type="text" placeholder="Search"/> 
                    </div>
                </form>
            </div>
            <div>
                <span>{todayDate}</span>
            </div>
        </header>
     );
}

export default Header;