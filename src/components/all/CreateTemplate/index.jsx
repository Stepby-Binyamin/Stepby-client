import React, { useContext } from 'react'
import Keyboard from '../Keyboard'
import SubKeyboard from '../SubKeyboard'
import styles from "./style.module.css"
import BtnSubmitText from "../../common/BtnSubmitText"
import { useNavigate } from "react-router-dom";
import mainContext from '../../../context/mainContext'
import apiCalls from '../../../functions/apiRequest'

const CreateTemplate = () => {
    const navigate = useNavigate();
    const { header, drawer, language } = useContext(mainContext)

    const collect = async (e) => {
        e.preventDefault();
        const fd = new FormData(e.target)
        const templateName = { templateName: fd.get("templateName", e.target.templateName.value) }
        const res = await apiCalls("post", "/template/createTemplate", templateName)
        drawer.setDrawer()
        navigate(`/template/${res}`)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={collect}>
                <Keyboard placeholder={language.TEMPLATES_NAME} name="templateName" />
                <div className={styles.text}>{language.TEMPLATES_TEXT}</div>
                <div className={styles.btn}>
                    <BtnSubmitText color={"gray"} text={language.SAVE} icon={"v to text.svg"} />
                </div>
            </form>
        </div>
    )
}
export default CreateTemplate