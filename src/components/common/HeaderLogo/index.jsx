import React from 'react'
import styles from "./style.module.css"

import { useNavigate } from 'react-router-dom'

import Logo from '../../all/Logo'

const HeaderLogo = ({ isArrow, isHeaderSet }) => {
    const navigate = useNavigate()


    return (
        <div className={styles.container}>
            <div  className={styles.svgDiv}>
                {isArrow && <img src="/images/icons/arrow.svg" alt="Arrow" onClick={() => navigate(-1)} />}
            </div>

            <div>
                <Logo />
            </div>

            <div  className={styles.svgDiv}>
                {isHeaderSet && <img src="/images/icons/header-set.svg" alt="iconPeopleSet" onClick={() => navigate("home/settings")} />}
            </div>
        </div>
    );
}

export default HeaderLogo