import React from 'react'
import styles from "./style.module.css"

const Answer = ({ isDone, isAdmin, src, title, p, isTitleFirst, onClick, ...props }) => {

    return (
        <div className={`${isAdmin ? styles.user : styles.admin} ${styles.border}`} onClick={onClick} >
            <div className={styles.iconSize}>
                <img src={src} className={styles.center} alt="sideIcon" />
            </div>

            {
                isTitleFirst ?
                    <div className={styles.centerText}>
                        <h4>{title}</h4>
                        <p>{p}</p></div> :
                    <div className={styles.centerText}>
                        <p>{p}</p>
                        <h4>{title}</h4>
                    </div>
            }


            {
                isAdmin ?
                    <div className={styles.done}>
                        {isDone ?
                            <img src="/images/icons/uploaded.svg" alt="sideIcon" /> :
                            <img src="/images/icons/QuestionMark.svg" alt="sideIcon" />}
                    </div> :
                    ""
            }

        </div >
    )
}

export default Answer