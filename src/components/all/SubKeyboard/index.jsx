import React, { version, useRef, useEffect } from 'react'
import styles from "./style.module.css"

const SubKeyboard = ({ placeholder, iconSrc, ...props }) => {


    return (
        <div className={styles.container}>
            <input className={styles.keyboard} placeholder={placeholder} style={{ background: `url(${iconSrc}) no-repeat scroll` }}></input>

        </div>
    )
}

export default SubKeyboard