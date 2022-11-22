import React from 'react';
import styles from './style.module.css'
import Logo from '../../components/all/Logo'

const Splash = () => {
    const SPLASH_UNDER = localStorage.language && JSON.parse(localStorage.language).SPLASH_UNDER

    return (
        <div className={styles.container}>
            <div className={styles.logo}><Logo logo={"/images/stepby"} /></div>
            <div className={styles.text1}>{SPLASH_UNDER}</div>
        </div>
    );
}

export default Splash;