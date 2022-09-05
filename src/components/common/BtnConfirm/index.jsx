import React from 'react'
import styles from "./style.module.css"

export default function BtnConfirm({ func,...props }) {
    return (
        <button className={styles.confirm} onClick={() => func}>
            <img src="/images/icon-btns/Vector.svg" alt="✔" />
        </button>
    );
}