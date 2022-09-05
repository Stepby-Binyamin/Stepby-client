import React from 'react'
import styles from "./style.module.css"

const Answer = ({ isDone, isAdmin, src, title, p, isTitleFirst, onClick }) => {

    return (
        <div className={`${isAdmin ? styles.admin : styles.user} ${styles.border}`} >
            <div className={styles.iconSize}>
                <img src={src} className={styles.center} />
            </div>

            {isTitleFirst ?
                <div className={styles.centerText}>
                    <h4>{title}</h4>
                    <p>{p}</p></div> :
                <div className={styles.centerText}>
                    <p>{p}</p>
                    <h4>{title}</h4>
                </div>}


            {isAdmin ?
                <div className={styles.done}>
                    {isDone ?
                        <img src="/images/icons/uploaded.svg" /> :
                        <img src="/images/icons/QuestionMark.svg" />}
                </div> :
                ""}

        </div >
    )
}

export default Answer