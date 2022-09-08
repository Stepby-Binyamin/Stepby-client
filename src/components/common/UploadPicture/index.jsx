import styles from "./style.module.css"
import React, { useState } from 'react'

import BtnIcon from "../../../components/common/BtnIcon"
import Input from "../../../components/common/Input/Input.jsx"

// import Camera from 'react-html5-camera-photo';
// import 'react-html5-camera-photo/build/css/index.css';


const UploadPicture = () => {

const [pictureName, setPictureName] = useState()

    function handleTakePhoto(dataUri) {
        // Do stuff with the photo...
        console.log(dataUri);
        console.log(pictureName);
        console.log('Photo taked');
    }

    return (
        <div className={styles.drawerPage}>
            <BtnIcon
                text={"תמונה"}
                icon={"/images/icon-btns/image.svg"}
                style={{ "marginBottom": "15px", borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }}
            />
            <Input
                name={"UploadPicture"}
                htmlFor="fileUpload"
                placeholder="תיאור לתמונה"
                onChange={(e) => setPictureName(e.target.value)}
                type="text"
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px", paddingRight: "16px", paddingBottom: "16px", height: "50px" }}
            />
            {/* https://www.npmjs.com/package/react-html5-camera-photo */}
            {/* <Camera onTakePhoto={(dataUri) => { handleTakePhoto(dataUri); }} /> */}
            <div className={styles.upload}>
                <label htmlFor="fileUpload"><img src={"/images/icon-btns/Upload.svg"} /><span>טעינת קובץ</span></label>
                <input type="file" className={styles.fileUpload} id="fileUpload" />
            </div>
        </div>
    )
}

export default UploadPicture