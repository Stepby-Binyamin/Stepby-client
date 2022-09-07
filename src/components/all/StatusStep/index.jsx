import React from 'react'
import styles from './style.module.css';


export default function StatusStep({ user, numOfStage, time, ...props }) {
    const theCurrentStage = ' השלב הנוכחי ';
    const nowWaiting = 'כרגע ממתינים ';

    return (
        <div className={`${time?styles.supremeBox:styles.supremeBoxCenter}`}>
            <div className={`${time? styles.currentStage: styles.currentStageCenter}`}>
                <div className={`${time ? styles.rightSide : styles.center}`}>
                    <div className={styles.stageNow}>{theCurrentStage}  </div>
                    <div className={styles.stageNum}>{numOfStage}</div>
                    <div className={styles.waitingFor}> {nowWaiting}
                        {user}
                    </div>
                </div>
                <div className={`${time?styles.leftSide:styles.center}`}>
                {time?<div>{ time%7===0?  <div className={styles.waitingTime}>{time/7+"w"}</div>:<div className={styles.waitingTime}>{time+"d"}</div>}</div>:null}
                </div>
            </div>
        </div>
    );
}