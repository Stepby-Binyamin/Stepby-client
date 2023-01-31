import React, { useEffect, useState } from 'react'
import styles from "./style.module.css"

const SubKeyboard = ({ placeholder, iconSrc, onChange, required, defaultValue, missingData = false, toClean = false, name, type = "text", ...props }) => {
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
                id="subKeyboard"
                type={type}
                name={name}
                className={`${styles.keyboard} ${missingData && styles.missing_data}`}
                required={required}
                placeholder={placeholder}
                onChange={change}
                style={{ background: `url(${iconSrc}) no-repeat scroll` }}
                {...props} >
            </input>

        </div>
    )
}

export default SubKeyboard