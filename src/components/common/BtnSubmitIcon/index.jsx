import React from 'react'
import styles from "./style.module.css"

// creator: nehorai
// chooze color: orange , gray , lite
// chooze icon: plus.svg, Arrow.svg , v.svg

export default function BtnSubmitIcon({ color, icon, func, ...props }) {
    return (<>
        <div className={styles.conteiner}>
            <button className={`${styles[color]} ${styles.submit}`} onClick={func} {...props}>
                <img src={"/images/icon-btns/" + icon} alt="" />
            </button>
        </div>
    </>
    );
}