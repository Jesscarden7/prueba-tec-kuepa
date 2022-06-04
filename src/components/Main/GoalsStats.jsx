import React from "react";
import ProgressBar from "../common/ProgressBar";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./main.module.css";

function GoalStats() {
    const percentage = 50;
    return (
        <section className={styles.mainStats}>
            <div className={styles.statsContainer}>
                <div className={styles.progressBarContainer}>
                    <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    className={styles.progressBar}
                    styles={buildStyles({
                        pathColor: `rgba(246,124,157, ${percentage / 100})`,
                        textColor: "#000000"
                    })}
                    />
                </div>
                <div className={styles.metrics}>
                    <div><p>Leads obtenidos</p><span>50/100</span></div>
                    <div><p>Matriculas Finalizadas</p><span>10/20</span></div>
                    <div><p>Cola de llamados</p><span>500/100</span></div>
                </div>
            </div>
            <div className={styles.goal}>
                <h3>Meta Grupal</h3>
                <div className={styles.result}>
                    <p>Leads obtenidos</p>
                    <p>200/400</p>
                </div>
                <ProgressBar bgcolor = "#f67c9d" completed = {percentage}/>
                <div className={styles.result}>
                    <p>Matriculas realizadas</p>
                    <p>50/100</p>
                </div>
                <ProgressBar bgcolor = "#f67c9d" completed = {percentage}/>
            </div>
        </section>
    );
}

export default GoalStats;
