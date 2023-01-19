import React, { useState, useEffect } from 'react'
import styles from './style.module.css'

const SignUpInfo = () => {
    const [language, setLanguage] = useState({})

    useEffect(() => {
        localStorage.language && setLanguage(JSON.parse(localStorage.language))
    }, [])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.right}> {language.TASK_MESSAGE_START}<b>{language.STEPBY}</b>{language.TASK_MESSAGE_END}</div>
            </div>
        </>
    )
}
export default SignUpInfo
