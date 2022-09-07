import styles from "./style.module.css"
import React from 'react'

const UploadFiles = () => {
    return (
        <div className={styles.upload}>
                <label for="fileUpload">Upload file</label>
                <input type="file" id="fileUpload" />
        </div>
    )
}

export default UploadFiles