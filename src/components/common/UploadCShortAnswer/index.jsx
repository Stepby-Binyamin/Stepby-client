import styles from "./style.module.css"
import React, { useContext, useState } from 'react'
import BtnIcon from "../BtnIcon"
import Input from "../Input/Input"
import BtnSubmitText from "../BtnSubmitText"
import mainContext from "../../../context/mainContext"
import apiCalls from '../../../functions/apiRequest'

const UploadCShortAnswer = ({ title, setIsAnswer, client, project, step, id, stepId }) => {
    console.log("🚀 ~ file: index.jsx:10 ~ UploadCShortAnswer ~ step", step)
    const { drawer, language } = useContext(mainContext)
    const [description, setDescription] = useState()

    const handleSubmitAnswer = async () => {
        const formData = new FormData();
        formData.append("objShortQuestion",
            JSON.stringify({ question: language.SHORT_QUESTION01, answer: description, client: client, projectName: project, stepNum: step, date: new Date() })) //id={id} stepId={stepId}
        const result = await apiCalls('post', '/files/upload-answer/', formData)
        console.log("apiCalls result", result);
        description && setIsAnswer(true)
        drawer.setDrawer('')
    }

    return (
        <>
            <div className={styles.drawerPage}>
                <BtnIcon
                    text={title}
                    icon={"/images/icon-btns/answer.svg"}
                    style={{ "marginBottom": "15px", borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }}
                />
                <Input
                    name={"UploadCShortAnswer"}
                    placeholder={language.YOUR_ANSWER}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    autoFocus
                    style={{ borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px", paddingRight: "16px", paddingBottom: "16px", height: "50px" }}
                />
            </div>
            <div className={styles.submitButton}>
                <div className={styles.sub}>
                    <BtnSubmitText icon="v to text.svg" color="gray" text={language.SAVE} func={handleSubmitAnswer} />
                </div>
            </div>
        </>
    )
}

export default UploadCShortAnswer