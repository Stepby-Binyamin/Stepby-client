import styles from "./style.module.css"
import React , { useState, useContext} from 'react'

import mainContext from "../../../context/mainContext"

import BtnIcon from "../BtnIcon"
import Input from "../Input/Input"
import RadioBtn from '../../all/radioBtn/withoutIcon'
import BtnSubmitText from "../BtnSubmitText"

import apiCalls from "../../../functions/apiRequest"

const TempFile = ({ data, step, project, id, stepId }) => {
const {drawer} = useContext(mainContext)
// console.log("dat00", data);

    const [question, setQuestion] = useState()
    const [isRequired, setIsRequired] = useState()

    const handleChange = (e) => {
        setQuestion(e.target.value);
    }

    const handleRadio = (e) => {
        // console.dir(e.target.value);
        e.target.value === "שאלת חובה" ? setIsRequired(true) : setIsRequired(false)
    }

    const handleSubmitAnswer = async () => {
        data = {
            ...data,
            type: "file",
            owner: "client",
            title: question,
            isRequired: isRequired,
            content: "",
            step,
            project,
            id,
            stepId
        }
        const formData = new FormData();
        formData.append("objShortQuestion", JSON.stringify(data))

        const result = await apiCalls('post', '/shaul/files/upload/', formData)
        console.log("apiCalls result", result);

        drawer.setDrawer('')
    }

    return (
        <div className={styles.drawerPage}>
            <BtnIcon
                text={"העלאת קובץ / צילום"}
                icon={"/images/icon-btns/Upload.svg"}
                style={{ "marginBottom": "15px", borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }} />
            <Input
                name={"TempFile"}
                placeholder="תיאור לקובץ"
                onChange={(e) => handleChange(e)}
                type="text"
                autoFocus
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px", paddingRight: "16px", paddingBottom: "16px", height: "50px" }}
            />
            <div className={styles.radio}>
                <RadioBtn
                    arr={['שאלת חובה', 'שאלת רשות']}
                    changeFunc={(e) => handleRadio(e)}
                />
            </div>
            <div className={styles.submitButton}>
                <div className={styles.sub}>
                    <BtnSubmitText icon="v to text.svg" color="gray" text="שמירה" func={handleSubmitAnswer} />
                </div>
            </div>
        </div>
    )
}

export default TempFile