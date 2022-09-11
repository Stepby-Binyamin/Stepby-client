import styles from "./style.module.css"
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import mainContext from '../../../context/mainContext'

import Logo from '../../all/Logo'

const HeaderLogo = () => {
    const navigate = useNavigate()
    const { header } = useContext(mainContext)

    return (
        <div className={styles.container}>
            <div className={styles.svgDiv}>
                {header.isArrow && <img src="/images/icons/arrow.svg" alt="Arrow" onClick={() => navigate(-1)} />}
            </div>

            <div onClick={()=>navigate("/projects")}>
                <Logo logo="/images/stepbyOrange" />
            </div>

            <div className={styles.svgDiv}>
                {header.isHeaderSet && <img src="/images/icons/header-set.svg" alt="iconPeopleSet" onClick={() => navigate("/setting")} />}
            </div>
        </div>
    );
}

export default HeaderLogo