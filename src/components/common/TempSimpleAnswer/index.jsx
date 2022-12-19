import React, { useState, useContext } from 'react'
import mainContext from "../../../context/mainContext"
import styles from "./style.module.css"
import BtnIcon from "../BtnIcon"
import Input from "../Input/Input"
import RadioBtn from '../../all/radioBtn/withoutIcon'
import BtnSubmitText from "../BtnSubmitText"
import apiCalls from '../../../functions/apiRequest'
import RadioBtnWithIcon from '../../all/radioBtn/WithIcon'

const TempSimpleAnswer = ({ fetchDataFunc, data, step, project, id }) => {
    console.log("🚀 ~ file: index.jsx:12 ~ TempSimpleAnswer ~ data", data.title)
    const { language } = useContext(mainContext)

    const [question, setQuestion] = useState()
    const [isRequired, setIsRequired] = useState(true)

    const handleSubmitAnswer = async () => {
        data = {
            ...data,
            // type: "answer",
            // owner: "client",
            title: question,  // important 
            isRequired: isRequired,
            // content: "",
            // step,
            // project,
            // id,
            // stepId
            // i have to send this info
            // bizName,
            // projectName,
            // stepName,
        }
        console.log("🚀 ~ file: index.jsx:19 ~ handleSubmitAnswer ~ data", data)

        // const result = await apiCalls('put', '/template/addWidget', data)
        // console.log("🚀 ~ file: index.jsx:37 ~ handleSubmitAnswer ~ result", result)

        fetchDataFunc(data)

        // const formData = new FormData();
        // formData.append("objShortQuestion", JSON.stringify(data))
        // // console.log('formData: ', formData);
        // const result = await apiCalls('post', '/files/uploadanswer/', formData)
        // // console.log("apiCalls result", result);
        // // fetchDataFunc(data);
        // drawer.setDrawer('')
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
                    <BtnSubmitText icon="v to text.svg" color="gray" text={language.SAVE} func={handleSubmitAnswer} />
                </div>
            </div>

        </div>
    </>
    )
}

export default TempSimpleAnswer