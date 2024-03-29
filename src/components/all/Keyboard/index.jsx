import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from "./style.module.css"

const Keyboard = ({ placeholder, onChange, required, defaultValue, name, missingData = false, toClean = false, ...props }) => {
    const [value, setValue] = useState(defaultValue)
    useEffect(() => {
        if (toClean)
            setValue('')
    }, [toClean])

    const change = (e) => {
        onChange && onChange(e)
        setValue(e.target.value)
    }

    return (
        <div className={styles.container}>
            <input
                value={value}
                autoFocus
                required={required}
                className={`${styles.keyboard} ${missingData && styles.missing_data}`}
                placeholder={placeholder}
                onChange={change}
                // defaultValue={defaultValue}
                name={name}
                {...props} />
        </div>
    )
}
export default Keyboard