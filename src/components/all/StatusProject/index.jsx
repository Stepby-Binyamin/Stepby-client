import React from 'react'
import styles from "./style.module.css"

const StatusProject = ({ isLink = true, name = "דורון", style = {}, completed = 10, totalTask = 12, link = "hii", ...props }) => {
    return (
        <div className={styles.large} {...props}>
            <div className={styles.completed}>
                <img src="/images/icons/clock.svg" alt="clock" />
                <span >{completed}/{totalTask}  הושלם  </span>
            </div>
            <p> כרגע בטיפול של {name}</p>
            {isLink && (
                <div className={styles.link}>
                    <img src="/images/icons/link.svg" alt="link" />
                    <a href={`https://wa.me/+972525666679?text=${link}`}> שתף את הקישור הייחודי עם הלקוח</a>
                </div>
            )}
        </div>
    );
}

export default StatusProject