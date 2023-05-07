import styles from "./style.module.css"
import React, { useContext, useState } from 'react'
import BtnIcon from "../BtnIcon"
import Input from "../Input/Input"
import BtnSubmitText from "../BtnSubmitText"
import mainContext from "../../../context/mainContext"
import apiCalls from '../../../functions/apiRequest'

const UploadCShortAnswer = ({ templateId, stepId, widgetId, title, updateWidget }) => {
    const { drawer, language } = useContext(mainContext)
    const [answer, setAnswer] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmitAnswer = () => {
        setIsLoading(true)
        apiCalls('post', '/files/upload-answer/', { templateId, stepId, widgetId, answer })
            .then(response => {
                answer && updateWidget(widgetId, answer)
                drawer.setDrawer('')
            })
            .catch(err => console.log("🚀 ~ file: index.jsx:21 ~ handleSubmitAnswer ~ err", err))
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
                    onChange={(e) => setAnswer(e.target.value)}
                    type="text"
                    autoFocus
                    style={{ borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px", paddingRight: "16px", paddingBottom: "16px", height: "50px" }}
                />
            </div>
            <div className={styles.submitButton}>
                <div className={styles.sub}>
                    <BtnSubmitText
                        icon="v to text.svg"
                        color="gray"
                        text={language.SAVE}
                        func={handleSubmitAnswer}
                        isLoading={isLoading} />
                </div>
            </div>
        </>
    )
}

export default UploadCShortAnswer