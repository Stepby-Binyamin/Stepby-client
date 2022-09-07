import React from 'react'
import styles from './style.module.css'
import { languages } from '../../../functions/languages'

export default function SignUpInfo() {

    const  stepby = languages[0].dict.STEPBY, dataStart = languages[0].dict.TASK_MESSAGE_START, restOfData = languages[0].dict.TASK_MESSAGE_END
    // console.log(dataStart, stepby, restOfData);

    return (
        <>
            <div className={styles.container}>
               <div className={styles.right}> {dataStart}<b>{stepby}</b>{restOfData}</div>
            </div>
        </>
    )
}
