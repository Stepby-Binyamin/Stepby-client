import React from 'react'
import styles from "./style.module.css"

const SubKeyboard = ({ placeholder, iconSrc, onChange, required, defaultValue, name, type = "text", ...props }) => {
    return (
        <div className={styles.container}>
            <input
                id="subKeyboard"
                type={type}
                name={name}
                className={styles.keyboard}
                required={required}
                placeholder={placeholder}
                onChange={onChange}
                defaultValue={defaultValue}
                style={{ background: `url(${iconSrc}) no-repeat scroll` }}
                {...props} ></input>

        </div>
    )
}

export default SubKeyboard