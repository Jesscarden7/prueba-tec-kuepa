import React from 'react';
import logo from "../../assets/images/logo.png"
import profilePic from "../../assets/images/profile.jpg"
import { RiHomeLine } from "react-icons/ri";
import { ImClipboard } from "react-icons/im";
import { AiOutlineDownSquare, AiOutlinePicCenter } from "react-icons/ai";
import styles from "./leftMenu.module.css"

function LeftMenu() {
    return (
        <section className={styles.sideNavbar}>
            <div>
                <img className={styles.logo} src={logo} alt= "Kuepa"/> 
            </div>
            <div className={styles.navIcons}>
                <a className={styles.navLink} href='/'>
                    <RiHomeLine color='white' fontSize={20}/>
                </a>
                <a className={styles.navLink} href='/'>
                    <ImClipboard color='white' fontSize={19}/>
                </a>
                <a className={styles.navLink} href='/'>
                <AiOutlinePicCenter color='white' fontSize={19}/>
                </a>
            </div>
            <div className={styles.navProfile}>
                <a className={styles.navLink} href='/'>
                    <AiOutlineDownSquare color='white' fontSize={20}/>
                </a>
                <a className={styles.navLink} href='/'>
                    <img className={styles.profilePic} src={profilePic} alt= "Kuepa"/> 
                </a>
            </div>

        </section>
    );
}

export default LeftMenu;


