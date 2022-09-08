import styles from './style.module.css'
import Logo from '../../components/all/Logo'
import { languages } from '../../functions/languages';
// import mainContext from '../../context/mainContext';
// import { useContext, useEffect } from 'react';

const Splash = () => {
    // const { header } = useContext(mainContext)

    // useEffect(() => {
    //     header.setIsTitle(false)
    //     header.setIsHeaderSet(false)
    //     header.setIsArrow(false)
    //     header.setIsHeaderSet(false)    

    // }, [])

    return (

        <div className={styles.container}>
            <div className={styles.logo}><Logo logo={"./images/stepby"} /></div>
            <div className={styles.text1}>{languages[0].dict.SUB_TITLE_SPLASH}</div>
        </div>

    );
}

export default Splash;