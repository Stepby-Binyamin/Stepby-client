import React, { version, useRef, useEffect } from 'react'
import styles from "./style.module.css"

const SubKeyboard = ({ placeholder, iconSrc, onChange, required, defaultValue, ...props }) => {


    return (
        <div className={styles.container}>
            <input className={styles.keyboard} {...props} required={required} placeholder={placeholder} onChange={onChange} defaultValue={defaultValue} style={{ background: `url(${iconSrc}) no-repeat scroll` }}></input>

        </div>
    )
}

export default SubKeyboard