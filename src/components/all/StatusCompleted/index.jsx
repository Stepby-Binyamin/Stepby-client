import React, {  useContext} from 'react'
import styles from './style.module.css';
import mainContext from "../../../context/mainContext"

export default function StatusCompleted() {
    const {language}= useContext(mainContext)
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
