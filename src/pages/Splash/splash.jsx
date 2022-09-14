import React from 'react';
import styles from './style.module.css'
import Logo from '../../components/all/Logo'

// import mainContext from '../../context/mainContext';
// import { useEffect } from 'react';
// import { useContext, useEffect } from 'react';

const Splash = () => {
    // const { language } = useContext(mainContext)

    // const language =JSON.parse(localStorage.language)
    // useEffect(() => {
    //     header.setIsTitle(false)
    //     header.setIsHeaderSet(false)
    //     header.setIsArrow(false)
    //     header.setIsHeaderSet(false)    

    // }, [])

    return (

        <div className={styles.container}>
            <div className={styles.logo}><Logo logo={"./images/stepby"} /></div>
            {/* <div className={styles.text1}>{language.SPLASH_UNDER}</div> */}
        </div>

    );
}

export default Splash;