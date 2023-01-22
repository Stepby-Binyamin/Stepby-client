import React, { useContext } from 'react';
import styles from './style.module.css'
import Logo from '../../components/all/Logo'
import { useState } from 'react';
import mainContext from '../../context/mainContext';
import { useEffect } from 'react';

const Splash = () => {
    const { language } = useContext(mainContext)
    const [fadeout, setFadeout] = useState(false)
    const splashUnder = localStorage.language && JSON.parse(localStorage.language).SPLASH_UNDER

    useEffect(() => {
        if (language) {
            setTimeout(() => {
                setFadeout(true)
            }, 2500)
        }
    }, [language])

    return (
        <div className={fadeout ? `${styles.container} ${styles.fadeout_container}` : `${styles.container}`}>
            <div className={styles.logo}>
                <Logo logo={"/images/stepby"} />
            </div>
            <div className={styles.text1}>{splashUnder}</div>
        </div>
    );
}
export default Splash;