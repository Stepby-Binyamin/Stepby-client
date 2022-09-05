import React from 'react'
import styles from './style.module.css'
export default function SignUpInfo() {
    const  stepby = " stepby ", dataStart = " אנחנו ב", restOfData = "בעניין להפוך את תהליכי העבודה שלך לפשוטים ונוחים יותר - לך וללקוחות שלך. בואו נתחיל..."
    // console.log(dataStart, stepby, restOfData);

    return (
        <>
            <div className={styles.container}>
               <div className={styles.right}> {dataStart}<b>{stepby}</b>{restOfData}</div>
            </div>
        </>
    )
}
