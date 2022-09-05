import React from 'react'
import styles from "./style.module.css"

// creator: nehorai
// chooze color: orange , gray , lite
// vhooze icon: plus.svg, Arrow.svg , v.svg

export default function BtnConfirm({ color, icon, func, ...props }) {
    return (<>
        <div className={styles.line}></div>
        <div className={styles.conteiner}>
            <button className={`${styles[color]} ${styles.submit}`} onClick={() => func}>
                <img src={"/images/icon-btns/" + icon} alt="" />
            </button>
        </div>
    </>
    );
}