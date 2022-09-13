import React, { useState, useContext} from 'react'
import mainContext from "../../../context/mainContext"
import styles from "./style.module.css"

import BtnIcon from "../BtnIcon"
import Input from "../Input/Input"
import RadioBtn from '../../all/radioBtn/withoutIcon'
import BtnSubmitText from "../BtnSubmitText"


const TempSimpleAnswer = () => {
    
    const {language}= useContext(mainContext)
    const [radio, setRadio] = useState()
    const [answer, setAnswer] = useState()

    const handleChange = (e) => {
        setAnswer(e.target.value);
    }

    const handleRadio = (e) => {
        setRadio(e.target.value)
    }

    const handleSubmitAnswer = (e) => {
        console.log(radio);
        console.log(answer);
    }
    
    return (<>
        <div className={styles.drawerPage}>
            <BtnIcon
                text={"תשובה פשוטה"}
                icon={"/images/icon-btns/answer.svg"}
                style={{ "marginBottom": "15px", borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }}
            />
            <Input
                name={"TempSimpleAnswer"}
                placeholder="השאלה שלך"
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
    </>
    )
}

export default TempSimpleAnswer