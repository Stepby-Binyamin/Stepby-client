import React from 'react'
import styles from "./style.module.css"
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

const HeaderTitle = () => {
    const navigate = useNavigate()

    const [isArrow, setIsArrow] = useState(true)
    const [isHamburguer, setIsHamburguer] = useState(false)
    const [title, setTitle] = useState("Title")
    const [subtitle, setSubtitle] = useState("Subtitle")
    const [isSubtitle, setIsSubtitle] = useState(true)


    const handleRightArrow = () => {
        alert("previous page")
        // navigate(-1)
    }


    return (
        <div className={styles.container}>
            <div>
                {isArrow && <img src="/images/icons/arrow.svg" alt="iconArrow" onClick={handleRightArrow} />}
                {isHamburguer && <img src="/images/icons/hamburguer.svg" alt="iconHamburguer" onClick={handleRightArrow} />}

            </div>

            <div className={styles.headerCenter}>
                <div>{title}</div>
                {isSubtitle && <span>{subtitle}</span>}
            </div>

            <div>
                <img src="/images/icons/3dots.svg" alt="icon3Dots" />
            </div>
        </div>
    );
}

export default HeaderTitle