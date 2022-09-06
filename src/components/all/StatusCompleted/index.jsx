import React from 'react'
import styles from './style.module.css';


export default function StatusCompleted() {
    const info = "הפרוייקט הזה מאחורינו"
    
    return (<>
        <div className={styles.completed}>
            <img src="/images/icons/completed.svg" />
            <div className={styles.completedInfo}>
                {info}
            </div>
        </div>


    </>
    )
}
