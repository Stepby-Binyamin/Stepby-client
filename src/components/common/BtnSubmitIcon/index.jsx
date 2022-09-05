import React from 'react'
import styles from "./style.module.css"

// creator: nehorai
// chooze color: orange , gray , lite
// chooze icon: plus.svg, Arrow.svg , v.svg

<<<<<<< HEAD
export default function BtnConfirm({ color, icon, func, ...props }) {
    return (<>
        <div className={styles.line}></div>
=======
export default function BtnConfirm({ color, icon,func}) {
    return (
>>>>>>> d62ef21f22b1dbe3689b306dba227dd863831e03
        <div className={styles.conteiner}>
            <button className={`${styles[color]} ${styles.submit}`} onClick={() => func}>
                <img src={"/images/icon-btns/" + icon} alt="" />
            </button>
        </div>
    </>
    );
}