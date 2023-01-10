import React, { useContext } from 'react'
import mainContext from '../../../context/mainContext'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"

const AddWidget = ({ func }) => {
    const { language } = useContext(mainContext)

    return (
        <div className={styles.addWidget}>
            <div>
                <label>{language.COLLECTING_INFO_FROM_CLIENT}</label>
            </div>
            <BtnIcon
                onClick={() => func('answer')}
                text={language.SIMPLE_ANS}
                icon={"/images/icon-btns/answer.svg"}
                style={{ "marginBottom": "15px" }}
            />
            <BtnIcon
                onClick={() => func('file')}
                text={language.UPLOAD}
                icon={"/images/icon-btns/Upload.svg"}
                style={{ "marginBottom": "15px" }}
            />
            <BtnIcon
                onClick={(e) => func('list')}
                text={language.CHOOSE}
                icon={"/images/icon-btns/list.svg"}
                isSoon={true}
                style={{ "marginBottom": "15px" }}
            />
            <BtnIcon
                onClick={(e) => func('grading')}
                text={language.RATING}
                icon={"/images/icon-btns/grading.svg"}
                isSoon={true}
                style={{ "marginBottom": "15px" }}
            />
            <BtnIcon
                onClick={(e) => func('payment')}
                text={language.PAYMENT}
                icon={"/images/icon-btns/payment.svg"}
                isSoon={true}
                style={{ "marginBottom": "32px" }}
            />
            <div>
                <label>{language.MORE_DETAILS}</label>
            </div>
            <BtnIcon
                onClick={(e) => func('img')}
                text={language.IMG}
                icon={"/images/icon-btns/image.svg"}
                style={{ "marginBottom": "15px" }}
            />
            <BtnIcon
                onClick={(e) => func('pdf')}
                text={language.FILE_PDF}
                icon={"/images/icon-btns/filePDF.svg"}
                style={{ "marginBottom": "15px" }}
            />
            <BtnIcon
                onClick={(e) => func('video')}
                text={language.VIDEO}
                icon={"/images/icon-btns/video.svg"}
                isSoon={true}
                style={{ "marginBottom": "15px" }}
            />
        </div>
    )
}
export default AddWidget

