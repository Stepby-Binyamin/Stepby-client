import React, { version, useRef, useEffect, useState } from 'react'
import Keyboard from '../Keyboard'
import SubKeyboard from '../SubKeyboard'
import styles from "./style.module.css"
import BtnSubmitText from "../../common/BtnSubmitText"
import BtnCheckBox from '../../common/BtnCheckBox'
import RadioBtn from '../../all/radioBtn/withoutIcon'
import { languages } from '../../../functions/languages'

const CreateTemplateGeneral = ({ placeholder, ...props }) => {
    const dict = languages[0].dict;

    const categoris = [
        { title: "עיצוב אתרים", isActive: false, id: 1 },
        { title: "עיצוב פנים", isActive: false, id: 2 },
        { title: "שיווק דיגיטלי", isActive: false, id: 3 },
        { title: "אימון כושר גופני", isActive: false, id: 4 },
        { title: "עיצוב אתרים", isActive: false, id: 1 },
        { title: "עיצוב פנים", isActive: false, id: 2 },
        { title: "שיווק דיגיטלי", isActive: false, id: 3 },
        { title: "אימון כושר גופני", isActive: false, id: 4 },]

    useEffect(() => {
        setData((current) => ({ ...current, categoris }))
    }, [])

    const [data, setData] = useState({})
    const [select, setSelect] = useState(true)

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({ ...values, [name]: value }))
    }

    const btnCheckBoxHandler = (name) => {
        const categoris = data.categoris.map(elem => elem.title === name ? ({ ...elem, isActive: !elem.isActive }) : elem)
        setData((current) => ({ ...current, categoris }))
    }

    const btnSubmitTextHandler = () => {
        console.log("yossef");
        console.log(data);
    }
    console.log(data);


    useEffect(() => {

        if (data.radio == dict.GENERAL) {
            setSelect(true);
        }
        if (data.radio == dict.SOME_CUSTOMER) {
            setSelect(false);
        }

    }, [data])




    return (
        <div className={styles.container}>
            <Keyboard onChange={handleChange} placeholder={dict.TEMPLATES_NAME} />
            <div className={styles.subContainer}>
                <div className={styles.radioButton}>
                    <RadioBtn arr={[dict.GENERAL, dict.SOME_CUSTOMER]} changeFunc={(e) => { handleChange(e) }} />
                    <div className={styles.rightContainer}>
                        <img src='/images/icons/target.svg' alt="" />
                        <div className={styles.text}>{dict.DISPERSTION}</div>
                    </div>
                </div>
                {select &&
                    <div className={styles.categoris}>
                        {data.categoris?.map(elem => <BtnCheckBox handleClick={btnCheckBoxHandler} name={elem.title} id={elem.id} isActive={elem.isActive} key={elem.title} />)}
                    </div>

                }
                {!select &&

                    <SubKeyboard iconSrc={'/images/icons/tell.svg'} placeholder={dict.USER_PHONE} onChange={handleChange} />}

            </div>
            <div className={styles.btn}> <BtnSubmitText func={btnSubmitTextHandler} color={"gray"} text={dict.SAVE} icon={"v to text.svg"} /> </div>
        </div>

    )
}

export default CreateTemplateGeneral