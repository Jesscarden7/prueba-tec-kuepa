import React from 'react';
import Header from './Header';
import GoalStats from './GoalsStats';
import DailyPlanning from './DailyPlanning';
import styles from "./main.module.css";

function Main() {
    return (
        <section className={styles.main}>
            <Header/>
            <h2>Hola, Jorge</h2>
            <GoalStats/>
            <DailyPlanning/>
        </section>
    );
}

export default Main;