import React, { version, useRef, useEffect } from 'react'
import styles from "./style.module.css"

const Keyboard = ({ placeholder, ...props }) => {

    const inputRef = useRef("");

    useEffect(() => {
        inputRef.current.focus();

    }, [])

    return (
        <div className={styles.container}>
            <input {...props}  className={styles.keyboard} ref={inputRef} placeholder={placeholder}></input>
            {/* <input className={styles.keyboard} ref={inputRef} placeholder="שם מלא של הלקוח..."></input> */}

        </div>
    )
}

export default Keyboard