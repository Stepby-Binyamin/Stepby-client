import React, { version, useRef, useEffect, useState } from 'react'
import Keyboard from '../Keyboard'
import SubKeyboard from '../SubKeyboard'
import styles from "./style.module.css"
import BtnSubmitText from "../../common/BtnSubmitText"
import BtnCheckBox from '../../common/BtnCheckBox'
import RadioBtn from '../../all/radioBtn/withoutIcon'
import Line from '../../common/Line'

const CreateTemplateGeneral = ({ placeholder, ...props }) => {
    //TODO: tell Nehorai to change the '()=> func' to 'func' in BtnSubmitText
    const categoris = [
        { title: "עיצוב אתרים", isActive: false,id: 1 },
        { title: "עיצוב פנים", isActive: false,id: 2 },
        { title: "שיווק דיגיטלי", isActive: false,id: 3 },
        { title: "אימון כושר גופני", isActive: false,id: 4 },]
        
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

        if (data.radio == "כללי") {
            setSelect(true);
        }
        if (data.radio == "לקוח מסוים") {
            setSelect(false);
        }

    }, [data])




    return (
        <div className={styles.container}>
            <Keyboard onChange={handleChange} placeholder={"שם התבנית החדשה..."} />
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
                        {data.categoris?.map(elem => <BtnCheckBox handleClick={btnCheckBoxHandler} name={elem.title} id={elem.id} isActive={elem.isActive} key={elem.title}/>)}
                    </>

                }
                {!select &&

                    <SubKeyboard iconSrc={'/images/icons/tell.svg'} placeholder={" טלפון המשתמש"} onChange={handleChange} />}

            </div>
            <div className={styles.btn}> <BtnSubmitText func={btnSubmitTextHandler} color={"gray"} text="שמירה" icon={"v to text.svg"} /> </div>
        </div>

    )
}

export default CreateTemplateGeneral