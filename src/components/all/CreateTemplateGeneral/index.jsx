import React, { version, useRef, useEffect } from 'react'
import Keyboard from '../Keyboard'
import SubKeyboard from '../SubKeyboard'
import styles from "./style.module.css"
import BtnSubmitText from "../../common/BtnSubmitText"
import BtnCheckBox from '../../common/BtnCheckBox'
import RadioBtn from '../../all/radioBtn/withoutIcon'

const CreateTemplateGeneral = ({ placeholder, ...props }) => {
    const text = "זה שם שמיועד לשימוש פנימי שלך (הלקוחות שלך לא יהיו חשופים אליו)."
    const categoris = [{ name: "עיצוב אתרים", id: 1 }, { name: "עיצוב פנים", id: 2 }, { name: "שיווק דיגיטלי", id: 3 }, { name: "אימון כושר גופני", id: 4 }]

    return (
        <div className={styles.container}>
            <Keyboard placeholder={"שם התבנית החדשה..."} />
            <div className={styles.radioButton}>
                <RadioBtn arr={['כללי', 'לקוח מסוים']} />
                <div className={styles.rightContainer}>
                    <img src='/images/icons/target.svg' alt="" />
                    <div className={styles.text}>תפוצה</div>
                </div>
            </div>

            {categoris.map(elem => <BtnCheckBox name={elem.name} id={elem.id} />)}


            <div className={styles.btn}> <BtnSubmitText color={"gray"} text="שמירה" icon={"v to text.svg"} /> </div>

        </div>
    )
}

export default CreateTemplateGeneral