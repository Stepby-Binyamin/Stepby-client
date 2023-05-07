import React, { useContext, useState } from 'react'
import styles from "./style.module.css"
import BtnIcon from "../BtnIcon"
import BtnHolder from "../BtnHolder/BtnHolder"
import BtnConfirm from "../BtnConfirm"
import BtnSubmitIcon from '../BtnSubmitIcon'
import mainContext from '../../../context/mainContext'
import uploadFile from '../../../functions/uploadFile'
import { useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';

const UploadedFileView = ({ title, setInformation, data }) => {
    console.log("🚀🚀 ~ file: index.jsx:11 ~ UploadedFileView ~ UploadedFileView")
    const { language, drawer } = useContext(mainContext)

    const [currentFile, setCurrentFile] = useState()
    const [alert, setAlert] = useState("")
    const [fileName, setFileName] = useState("")
    const [image, setImage] = useState("")

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;  //react-pdf

    // useEffect(() => {
    //     console.log("🚀 ~ file: index.jsx:21 ~ UploadedFileView ~ fileName", fileName, typeof fileName, Boolean(fileName))
    // }, [fileName])

    const showInfo = (file) => {
        if (file.size / 1024 / 1024 > 4) {
            setAlert("file is too big")
            return
        }
        setImage(URL.createObjectURL(file))
        setFileName(file.name)
        setCurrentFile(file);
    }

    const handleSubmitAnswer = async () => {
        if (!fileName) return
        uploadFile(currentFile, "file", null, null, null, data)
            .then((result) => {
                console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 ~ file: index.jsx:42 ~ .then ~ result", result)
                setInformation((curr) => ({ ...curr, step: result }))
                drawer.setDrawer('')
            })

    }

    return (
        <>
            <div className={styles.drawerPage}>
                <BtnIcon
                    text={title}
                    icon={"/images/icon-btns/Upload.svg"}
                    style={{ "marginBottom": "15px", borderTop: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }}
                />
                <div className={styles.clientImg}>
                    {
                        fileName ?
                            currentFile.type.startsWith("image") ? <img src={image} alt="Preview file" className={styles.previewImg} />
                                : <Document file={image} className={styles.previewDocument}>
                                    <Page pageNumber={1} className={styles.previewPage} renderTextLayer={false} renderAnnotationLayer={false} />
                                </Document>
                            : null
                    }
                </div>

                {!fileName && <div className={styles.upload}>
                    <label htmlFor="fileUpload">
                        <img src={"/images/icon-btns/Upload.svg"} alt="" />
                        <span> {language.FILE_LOAD}</span>
                    </label>
                    <input type="file" className={styles.fileUpload} id="fileUpload" onChange={(e) => showInfo(e.target.files[0])} />
                    {fileName ? <span>{fileName}</span> : <span>{alert}</span>}
                </div>}
            </div>

            <div className={styles.btns}>
                <div style={{ width: "14%" }}>
                    <BtnSubmitIcon icon="garbage.svg" color="lite" func={() => setFileName("")} />
                </div>
                <div style={{ width: "86%" }}>
                    <BtnSubmitIcon icon="v.svg" color="gray" func={handleSubmitAnswer} />
                </div>
            </div>
        </>
    )
}
export default UploadedFileView