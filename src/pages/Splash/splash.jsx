import React, {useContext} from 'react';
import styles from './style.module.css'
import Logo from '../../components/all/Logo'

import mainContext from '../../context/mainContext';
// import { useContext, useEffect } from 'react';

const Splash = () => {
    const { language } = useContext(mainContext)

    // useEffect(() => {
    //     header.setIsTitle(false)
    //     header.setIsHeaderSet(false)
    //     header.setIsArrow(false)
    //     header.setIsHeaderSet(false)    

    // }, [])

    return (

        <div className={styles.container}>
            <div className={styles.logo}><Logo logo={"./images/stepby"} /></div>
            <div className={styles.text1}>{language.SUB_TITLE_SPLASH}</div>
        </div>

    );
}

export default Splash;