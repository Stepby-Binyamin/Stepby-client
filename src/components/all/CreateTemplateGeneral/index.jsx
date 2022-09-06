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
        setData(values => ({ ...values, [name]: value }))
    }
    console.log(data);

    useEffect(() => {

        if (data.radio == "כללי") {
            setSelect(true)
        }
        if (data.radio == "לקוח מסוים") {
            setSelect(false)
        }

    }, [data])




    return (
        <div className={styles.container}>
            <Keyboard placeholder={"שם התבנית החדשה..."} />
            <div className={styles.subContainer}>
                <div className={styles.radioButton}>
                    <RadioBtn arr={['כללי', 'לקוח מסוים']} changeFunc={(e) => { handleChange(e) }} />
                    <div className={styles.rightContainer}>
                        <img src='/images/icons/target.svg' alt="" />
                        <div className={styles.text}>תפוצה</div>
                    </div>
                </div>
                {select &&
                    <>
                        {categoris.map(elem => <BtnCheckBox name={elem.name} id={elem.id} />)}
                    </>

                }
                {!select &&

                    <SubKeyboard iconSrc={'/images/icons/tell.svg'} placeholder={" טלפון המשתמש"} />}

            </div>
            <div className={styles.btn}> <BtnSubmitText color={"gray"} text="שמירה" icon={"v to text.svg"} /> </div>
        </div>

    )
}

export default CreateTemplateGeneral