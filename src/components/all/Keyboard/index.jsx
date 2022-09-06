import React, { version, useRef, useEffect } from 'react'
import styles from "./style.module.css"

const Keyboard = ({ placeholder, onChange, required, defaultValue, ...props }) => {


    return (
        <div className={styles.container}>
            <input {...props} required={required} className={styles.keyboard} autoFocus placeholder={placeholder} onChange={onChange} defaultValue={defaultValue} />
        </div>
    )
}

export default Keyboard