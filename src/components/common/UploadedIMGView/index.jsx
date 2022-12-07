import React, { useContext } from 'react'
import styles from "./style.module.css"
import BtnIcon from "../BtnIcon"
import BtnHolder from "../BtnHolder/BtnHolder"
import BtnConfirm from "../BtnConfirm"
import BtnSubmitIcon from '../BtnSubmitIcon'
import mainContext from '../../../context/mainContext'

const UploadedIMGView = () => {
    const { language } = useContext(mainContext)

    return (<>
        <div className={styles.drawerPage}>
            <BtnIcon
                text={language.UPLOAD_IMG}
                icon={"/images/icon-btns/Upload.svg"}
                style={{ "marginBottom": "15px", borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }}
            />
            <div className={styles.clientImg}>
                <img src={'/images/pic.png'} alt="clientImg" />
            </div>
        </div>
        <div className={styles.btns}>
            <div style={{ width: "14%" }}>
                <BtnSubmitIcon icon="garbage.svg" color="lite" />
            </div>
            <div style={{ width: "86%" }}>
                <BtnSubmitIcon icon="v.svg" color="gray" />
            </div>
        </div>
    </>
    )
}
export default UploadedIMGView