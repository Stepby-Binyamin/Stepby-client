import styles from './style.module.css';
import BtnHolder from "../../common/BtnHolder/BtnHolder"
import BtnSubmitIcon from "../../common/BtnSubmitIcon"


export default function BtnMainSec(){
    return(<>
    
    <div className={styles.conteiner}>
        <div>
        <BtnHolder icon={"3points"} color="lite"/>
        </div>
        <div className={styles.l}>
        <BtnSubmitIcon icon="plus.svg" color="gray" />
        </div>
    </div>
    </>
    )

}