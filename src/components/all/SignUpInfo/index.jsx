import React, { useState, useEffect } from 'react'
import styles from './style.module.css'


export default function SignUpInfo() {
    
    const [language, setLanguage] = useState()

    useEffect(() => {
        setLanguage(JSON.parse(localStorage.language))
    },[])
 
    const  stepby = language.STEPBY, dataStart = language.TASK_MESSAGE_START, restOfData = language.TASK_MESSAGE_END
    // console.log(dataStart, stepby, restOfData);

    return (
        <>
            <div className={styles.container}>
               <div className={styles.right}> {dataStart}<b>{stepby}</b>{restOfData}</div>
            </div>
        </>
    )
}
