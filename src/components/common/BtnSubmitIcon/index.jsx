import React from 'react'
import Loading from '../Loading';
import styles from "./style.module.css"

// color: orange , gray , lite
// icon: plus.svg, Arrow.svg , v.svg

const BtnSubmitIcon = ({ color, icon, func, isLoading = false, ...props }) => {
    console.log("🚀 ~ file: index.jsx:8 ~ BtnSubmitIcon ~ BtnSubmitIcon")
    return (
        <>
            <div className={styles.conteiner}>
                <button className={`${styles[color]} ${styles.submit}`} onClick={func} {...props}>
                    {isLoading ?
                        <Loading />
                        :
                        <img src={"/images/icon-btns/" + icon} alt="" />}
                </button>
            </div>
        </>
    );
}
export default BtnSubmitIcon