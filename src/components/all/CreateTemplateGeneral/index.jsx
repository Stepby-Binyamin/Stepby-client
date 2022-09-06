import React, { version, useRef, useEffect, useState } from 'react'
import Keyboard from '../Keyboard'
import SubKeyboard from '../SubKeyboard'
import styles from "./style.module.css"
import BtnSubmitText from "../../common/BtnSubmitText"
import BtnCheckBox from '../../common/BtnCheckBox'
import RadioBtn from '../../all/radioBtn/withoutIcon'
import Line from '../../common/Line'

const CreateTemplateGeneral = ({ placeholder, ...props }) => {
    const categoris = [{ name: "עיצוב אתרים", id: 1 }, { name: "עיצוב פנים", id: 2 }, { name: "שיווק דיגיטלי", id: 3 }, { name: "אימון כושר גופני", id: 4 }]

    const [data, setData] = useState({})
    const [select, setSelect] = useState(true)

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //     setData(values => ({ ...values, [name]: value }))
    }

    // if (data.radio === "כללי") {
    //     setSelect(true)
    // }
    // else {
    //     setSelect(false)
    // }

    return (
        <div className={styles.container}>
            <Keyboard placeholder={"שם התבנית החדשה..."} />
            <div style={{ padding: "12px" }}>
                <div className={styles.radioButton}>
                    <RadioBtn arr={['כללי', 'לקוח מסוים']} changFunc={(e) => { handleChange(e) }} />
                    <div className={styles.rightContainer}>
                        <img src='/images/icons/target.svg' alt="" />
                        <div className={styles.text}>תפוצה</div>
                    </div>
                </div>

                {categoris.map(elem => <BtnCheckBox name={elem.name} id={elem.id} />)}

            </div>
            <div className={styles.btn}> <BtnSubmitText color={"gray"} text="שמירה" icon={"v to text.svg"} /> </div>
        </div>

    )
}

export default CreateTemplateGeneral