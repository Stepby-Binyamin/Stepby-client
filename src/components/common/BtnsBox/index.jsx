import BtnSubmitText from "../BtnSubmitText";
import styles from "./style.module.css"

export default function BtnsBox(...props){
return(<>
<div className={styles.conteiner}>
    <div className={styles.r}>
<BtnSubmitText icon={"v to text.svg"} color="gray" text={"שמירה"}/>
    </div>
    <div className={styles.l}>
<BtnSubmitText  color="lite" text={"שמירה + יצירת שלב נוסף"}/>
    </div>
</div>
</>
);
}