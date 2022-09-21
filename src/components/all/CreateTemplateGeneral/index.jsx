import React, { version, useRef, useEffect, useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import Keyboard from '../Keyboard'
import SubKeyboard from '../SubKeyboard'
import styles from "./style.module.css"
import BtnSubmitText from "../../common/BtnSubmitText"
import BtnCheckBox from '../../common/BtnCheckBox'
import RadioBtn from '../../all/radioBtn/withoutIcon'
import mainContext from '../../../context/mainContext'
import apiCalls from '../../../functions/apiRequest';



const CreateTemplateGeneral = ({ placeholder, NewAdminTemplate, ...props }) => {

    const { header, drawer, language } = useContext(mainContext)
    let navigate = useNavigate();

    const [data, setData] = useState({});
    const [select, setSelect] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const res = await apiCalls("get", "/category/")
            setData((current) => ({ ...current, res }))
        }
        getData()

    }, [])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({ ...values, [name]: value }));

    }

    const btnCheckBoxHandler = (name) => {
        const categories = data?.res.map(elem => elem.categoryName === name ? ({ ...elem, isActive: !elem.isActive }) : elem)
        setData((current) => ({ ...current, res: categories }))
    }

    const btnSubmitTextHandler = () => {
        drawer.setDrawer()
        // console.log(typeof NewAdminTemplate);
        NewAdminTemplate({ ...data, isGeneral: select })
        // navigate('/template/1234')

    }

    useEffect(() => {

        if (data.radio == language.GENERAL) {
            setSelect(true);
        }
        if (data.radio == language.SOME_CUSTOMER) {

            setSelect(false);

        }

    }, [data])




    return (
        <div className={styles.container}>
            <Keyboard onChange={handleChange} placeholder={language.TEMPLATES_NAME} name={"templateName"} />

            <div className={styles.subContainer}>
                <div className={styles.radioButton}>
                    <RadioBtn arr={[language.GENERAL, language.SOME_CUSTOMER]} changeFunc={(e) => { handleChange(e) }} />
                    <div className={styles.rightContainer}>
                        <img src='/images/icons/target.svg' alt="" />
                        <div className={styles.text}>{language.DISPERSTION}</div>
                    </div>
                </div>
                {select &&
                    <div className={styles.categoris}>
                        {data.res?.map(elem => <BtnCheckBox handleClick={btnCheckBoxHandler} name={elem.categoryName} id={elem._id} isActive={elem.isActive} key={elem._id} />)}
                    </div>

                }
                {!select &&
                    <SubKeyboard iconSrc={'/images/icons/tell.svg'} placeholder={language.USER_PHONE} onChange={handleChange} name={"phoneNumber"} type={"number"} />}

            </div>
            <div className={select ? styles.btn : styles.btnFix}> <BtnSubmitText func={btnSubmitTextHandler} color={"gray"} text={language.SAVE} icon={"v to text.svg"} /> </div>
        </div>

    )
}

export default CreateTemplateGeneral;