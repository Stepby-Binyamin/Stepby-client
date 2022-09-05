import React from 'react'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'


export default function UserNumberVerification({ phoneNum }) {
    const sendCode = languages[0].dict.SEND_CODE
    let start=  phoneNum.slice(0,3)
    let end= phoneNum.slice(3)
    return (
        <>
            <div className={styles.numVerify}>
                {sendCode}{" " + start+"-"+end}
            </div>
        </>
    )
}
