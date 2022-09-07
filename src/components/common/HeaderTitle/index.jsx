import styles from "./style.module.css"
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import mainContext from '../../../context/mainContext'

import Confirm from '../../all/Confirm'

const HeaderTitle = ({ drawerContent }) => {
    const navigate = useNavigate()
    const { header, drawer } = useContext(mainContext)

    const handleClick = () => {
        // drawer.setDrawer(drawerContent)
        drawer.setDrawer(true)
        console.log("click");
    }

    return (
        <div className={styles.container}>
            <div className={styles.svgDiv}>
                {header.isArrow && <img src="/images/icons/arrow.svg" alt="iconArrow" onClick={() => navigate(-1)} />}
                {header.isHamburguer && <img src="/images/icons/hamburguer.svg" alt="iconHamburguer" onClick={() => navigate(-1)} />}

            </div>

            <div className={styles.headerCenter}>
                <div>{header.title}</div>
                {header.subTitle && <div> <span>{header.subTitle}</span></div>}
            </div>

            <div className={styles.svgDiv}>
                {header.isDots && <img src="/images/icons/3dots.svg" alt="icon3Dots" onClick={handleClick} />}
            </div>
        </div>
    );
}

export default HeaderTitle