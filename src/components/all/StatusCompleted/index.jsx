import React, { useContext } from 'react'
import styles from './style.module.css';
import mainContext from "../../../context/mainContext"

const StatusCompleted = () => {
    const { language } = useContext(mainContext)

    return (<>
        <div className={styles.completed}>
            <img src="/images/icons/completed.svg" alt="" />
            <div className={styles.completedInfo}>
                {language.THIS_PROJECT_BEHIND_US}
            </div>
        </div>
    </>
    )
}
export default StatusCompleted
