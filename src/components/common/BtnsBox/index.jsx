import React, { useContext } from 'react'
import mainContext from "../../../context/mainContext"
import BtnSubmitText from "../BtnSubmitText";
import styles from "./style.module.css"

const BtnsBox = (...props) => {
    const { language } = useContext(mainContext)

    return (<>
        <div className={styles.conteiner}>
            <div className={styles.r}>
                <BtnSubmitText icon={"v to text.svg"} color="gray" text={language.SAVE} />
            </div>
            <div className={styles.l}>
                <BtnSubmitText color="lite" text={language.SAVE_AND_CREATE} />
            </div>
        </div>
    </>
    );
}
export default BtnsBox