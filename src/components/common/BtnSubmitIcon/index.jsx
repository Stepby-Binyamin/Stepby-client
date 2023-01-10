import React from 'react'
import styles from "./style.module.css"

// color: orange , gray , lite
// icon: plus.svg, Arrow.svg , v.svg

const BtnSubmitIcon = ({ color, icon, func, ...props }) => {
    return (
        <>
            <div className={styles.conteiner}>
                <button className={`${styles[color]} ${styles.submit}`} onClick={func} {...props}>
                    <img src={"/images/icon-btns/" + icon} alt="" />
                </button>
            </div>
        </>
    );
}
export default BtnSubmitIcon