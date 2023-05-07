import React, { useState, useContext } from 'react'
import mainContext from "../../../context/mainContext"
import styles from "./style.module.css"
import BtnIcon from "../BtnIcon"
import Input from "../Input/Input"
import RadioBtn from '../../all/radioBtn/withoutIcon'
import BtnSubmitText from "../BtnSubmitText"
import apiCalls from '../../../functions/apiRequest'
import RadioBtnWithIcon from '../../all/radioBtn/WithIcon'

const TempSimpleAnswer = ({ data, setInformation }) => {
    const { drawer, language } = useContext(mainContext)

    const [question, setQuestion] = useState()
    const [isRequired, setIsRequired] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmitAnswer = async () => {
        data = {
            ...data,
            owner: "client",
            type: "answer",
            title: question,  // important 
            isRequired: isRequired,
        }
        console.log("🚀 ~ file: index.jsx:19 ~ handleSubmitAnswer ~ data", data)

        setIsLoading(true)
        const result = await apiCalls('post', '/files/upload-answer/', data)
        setInformation((curr) => ({ ...curr, step: result }))
        drawer.setDrawer('')
    }

    return (<>
        <div className={styles.drawerPage}>
            <BtnIcon
                text={language.SIMPLE_ANS}
                icon={"/images/icon-btns/answer.svg"}
                style={{ "marginBottom": "15px", borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }} />
            <Input
                name={"TempSimpleAnswer"}
                placeholder={!data.title ? language.DESCRIPTION_ASK : ""}
                defaultValue={data.title ? data.title : ""}
                onChange={(e) => setQuestion(e.target.value)}
                type="text"
                autoFocus
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px", paddingRight: "16px", paddingBottom: "16px", height: "50px" }} />
            <div className={styles.radio}>
                <RadioBtnWithIcon
                    changeFunc={(e) => e.target.value === language.ASK_REQ ? setIsRequired(true) : setIsRequired(false)}
                    obj={[{ name: language.ASK_REQ }, { name: language.ASK_PER }]} />
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

        </div>
    </>
    )
}

export default TempSimpleAnswer