import React from 'react'
import styles from "./style.module.css"

import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

const HeaderLogo = () => {
    const navigate = useNavigate()
    const [isArrow, setIsArrow] = useState(true)
    const [isHeaderSet, setIsHeaderSet] = useState(true)
    


const handlePeopleSet =()=>{
    alert("home/settings")
    // navigate("home/settings")
}

const handleRightArrow =() =>{
    alert("previous page")
    // navigate(-1)
}

    return (
        <div className={styles.container}>
            <div>
                {isArrow && <img src="/images/icons/arrow.svg" alt="Arrow" onClick={handleRightArrow}/>}
            </div>

            <div className={styles.headerCenter}>
                <div><img src={iconStepby} alt="iconStepby" /></div>
            </div>

            <div>
                {isHeaderSet && <img src="/images/icons/header-set.svg" alt="iconPeopleSet" onClick={handlePeopleSet}/>}
            </div>
        </div>
    );
}

export default HeaderLogo