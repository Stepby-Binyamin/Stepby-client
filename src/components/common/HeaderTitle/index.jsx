import React from 'react'
import styles from "./style.module.css"
import { useNavigate } from 'react-router-dom'

const HeaderTitle = ({ drawerFunc, isArrow, isHamburguer,title, subTitle, }) => {
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <div className={styles.svgDiv}>
                {isArrow && <img src="/images/icons/arrow.svg" alt="iconArrow" onClick={() => navigate(-1)} />}
                {isHamburguer && <img src="/images/icons/hamburguer.svg" alt="iconHamburguer" onClick={() => navigate(-1)} />}

            </div>

            <div className={styles.headerCenter}>
                <div>{title}</div>
                {subTitle && <div> <span>{subTitle}</span></div>}
            </div>

            <div className={styles.svgDiv}>
                <img src="/images/icons/3dots.svg" alt="icon3Dots" onClick={drawerFunc} />
            </div>
        </div>
    );
}

export default HeaderTitle