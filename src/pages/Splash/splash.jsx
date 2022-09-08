import styles from './style.module.css'
import Logo from '../../components/all/Logo'
import { languages } from '../../functions/languages';
const splash = () => {

    return (

        <div className={styles.container}>
            <div className={styles.logo}><Logo logo={"./images/stepby"} /></div>
            <div className={styles.text1}>{languages[0].dict.SUB_TITLE_SPLASH}</div>
        </div>
        
    );
}

export default splash;