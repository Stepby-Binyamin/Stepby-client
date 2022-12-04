import React from 'react'
import styles from "./style.module.css"

const BtnCheckBox = ({ name, handleClick, isActive }) => {

    return (
        <div
            onClick={() => { handleClick(name) }}
            className={isActive ? `${styles.container} ${styles.active}` : styles.container}>
            <img
                className={(isActive) ? styles.active : ""}
                src={!isActive ? "/images/icons/greyCheck.svg" : "/images/icons/checked.svg"}
                alt='check' />
            <label className={isActive ? styles.active : ""} htmlFor={name}>{name}</label>
        </div>
    )

}
export default BtnCheckBox