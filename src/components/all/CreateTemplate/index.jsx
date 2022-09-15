import React, { version, useRef, useEffect, useContext } from 'react'
import Keyboard from '../Keyboard'
import SubKeyboard from '../SubKeyboard'
import styles from "./style.module.css"
import BtnSubmitText from "../../common/BtnSubmitText"
import { useNavigate } from "react-router-dom";
import mainContext from '../../../context/mainContext'



const CreateTemplate = ({ placeholder, iconSrc, createNewTemplate, ...props }) => {

    const { header, drawer, language } = useContext(mainContext)
    let navigate = useNavigate();


    function collect(e) {
        e.preventDefault();
        const fd = new FormData(e.target)

        const data = {
            templateName: fd.get("templateName", e.target.templateName.value)
        }
        console.log(data);
        createNewTemplate(data)
        drawer.setDrawer()
        navigate('/template/1234')


    }

    return (
        <div className={styles.container}>
            <form on onSubmit={(e) => collect(e)}>
                <Keyboard placeholder={language.TEMPLATES_NAME} name="templateName" />
                <div className={styles.text}>{language.TEMPLATES_TEXT}</div>

                <div className={styles.btn}> <BtnSubmitText color={"gray"} text={language.SAVE} icon={"v to text.svg"} /> </div>
            </form>

        </div>
    )
}

export default CreateTemplate