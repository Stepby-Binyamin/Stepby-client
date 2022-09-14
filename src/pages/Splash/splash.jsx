import React from 'react';
import styles from './style.module.css'
import Logo from '../../components/all/Logo'

const Splash = () => {

    const SPLASHUNDER = JSON.parse(localStorage.language).SPLASH_UNDER

    return (
        <div className={styles.container}>
            <div className={styles.logo}><Logo logo={"/images/stepby"} /></div>
            <div className={styles.text1}>{SPLASHUNDER}</div>
        </div>
    );
}

export default Splash;