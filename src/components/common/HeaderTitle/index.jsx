import React from 'react'
import styles from "./style.module.css"
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { headerTitleContext } from '../../../helper/Context'
import { useContext } from 'react'

const HeaderTitle = ({ drawerFunc, isArrow, isHamburguer }) => {
    const navigate = useNavigate()

    const headerTitleContextLocal = useContext(headerTitleContext)


    const [isSubtitle, setIsSubtitle] = useState(true)

    const [title, setTitle] = useState("Title")
    const [subtitle, setSubtitle] = useState("Subtitle")


    const handleRightArrow = () => {
        alert("previous page")
        // 
    }


    return (
        <div className={styles.container}>
            <div className={styles.svgDiv}>
                {isArrow && <img src="/images/icons/arrow.svg" alt="iconArrow" onClick={() => navigate(-1)} />}
                {isHamburguer && <img src="/images/icons/hamburguer.svg" alt="iconHamburguer" onClick={() => navigate(-1)} />}

            </div>

            <div className={styles.headerCenter}>
                <div>{headerTitleContextLocal.title}</div>
                {headerTitleContextLocal.subtitle && <div> <span>{headerTitleContextLocal.subtitle}</span></div>}
            </div>

            <div className={styles.svgDiv}>
                <img src="/images/icons/3dots.svg" alt="icon3Dots" onClick={drawerFunc} />
            </div>
        </div>
    );
}

export default HeaderTitle