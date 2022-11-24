import React from 'react'
import styles from "./style.module.css"

const Keyboard = ({ placeholder, onChange, required, defaultValue, name, ...props }) => {
    return (
        <div className={styles.container}>
            <input
                autoFocus
                id="keyboard"
                required={required}
                className={styles.keyboard}
                placeholder={placeholder}
                onChange={onChange}
                defaultValue={defaultValue}
                name={name}
                {...props} />
        </div>
    )
}

export default Keyboard