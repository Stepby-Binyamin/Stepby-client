import React, { useContext} from 'react'
import styles from "./style.module.css"


import BtnIcon from "../BtnIcon"
import BtnHolder from "../BtnHolder/BtnHolder"
import BtnConfirm from "../BtnConfirm"

const handleChange = (e) => {
    console.log(e.target.value);
}

const UploadedIMGView = () => {

    return (<>
        <div className={styles.drawerPage}>
            <BtnIcon
                text={"העלאת צילומי מסך של מתחרים טובים"}
                icon={"/images/icon-btns/Upload.svg"}
                style={{ "marginBottom": "15px", borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }}
            />
            <div className={styles.clientImg}>
                <img src={'/images/pic.png'} alt="clientImg"/>
            </div>
        </div>
        <div className={styles.btns}>
            <BtnHolder color="lite" icon="garbage" /><BtnConfirm icon="v.svg" color="gray" />
        </div>
    </>
    )
}

export default UploadedIMGView