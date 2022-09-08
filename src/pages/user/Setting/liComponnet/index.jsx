import React from 'react'
import styles from "./style.module.css"
import { useNavigate } from 'react-router-dom'


const LiComp = ({ style = {}, header, subTitle, link, ...props }) => {
    const navigate = useNavigate()

    return (
        <div className={styles.Name} style={style} {...props} onClick={() => { navigate(link) }} >
            <h4 className={styles.hederSize}>{header}</h4>
            <div style={{ display: "flex" }}>
                <h6 className={styles.subTitle}>{subTitle}</h6>
                <img style={{ width: "13px" }} src="/images/icon-btns/grayPancile.svg" alt="icon"></img>
            </div>
            <div className={styles.border}>

            </div>
        </div >
    )
}

export default LiComp