import React from 'react';
import Header from './Header';
import GoalStats from './GoalsStats';
import DailyPlanning from './DailyPlanning';
import styles from "./main.module.css";

function Main({user}) {
    return (
        <section className={styles.main}>
            <Header/>
            <h2>Hola, {user.profile.name}</h2>
            <GoalStats user={user} />
            <DailyPlanning/>
        </section>
    );
}

export default Main;