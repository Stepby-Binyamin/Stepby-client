import React from 'react'
import styles from "./style.module.css"

export default function UserNumberVerification({ phoneNum }) {
    const data = "שלחנו למספר"
    let start=  phoneNum.slice(0,3)
    let end= phoneNum.slice(3)
    return (
        <>
            <div className={styles.numVerify}>
                {data}{" " + start+"-"+end}
            </div>
        </>
    )
}
