import React from "react";
import { TbSearch } from "react-icons/tb";
import styles from  "./main.module.css"

function Header() {
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
                <select>
                    <option>Wed, 20 May</option>
                    <option>Wed, 20 May</option>
                </select>
            </div>
        </header>
     );
}

export default Header;