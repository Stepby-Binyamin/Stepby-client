import styles from "./style.module.css"
import React, { useState, useContext, useEffect } from 'react'
import { useParams, useLocation, useNavigate, Navigate } from "react-router-dom"
import StatusStep from "../../../components/all/StatusStep"
import Answer from "../../../components/all/Answer"
import ImageView from "../../../components/all/ImageView"
import BtnSubmitIcon from "../../../components/common/BtnSubmitIcon"
import UploadCShortAnswer from "../../../components/common/UploadCShortAnswer"
import mainContext from "../../../context/mainContext"
import axios from "axios"
import apiCalls from "../../../functions/apiRequest"
import MoreStep from "../../../components/all/MoreStep"
import Confirm from "../../../components/all/Confirm"
import userContext from "../../../context/userContext"
import UploadedFileView from "../../../components/common/UploadedFileView"


const Step = ({ mode }) => {
    const navigate = useNavigate()
    const { state } = useLocation()
    const { templateId, stepId } = useParams()

    const { userData } = useContext(userContext)
    const { header, drawer, language } = useContext(mainContext)

    const [information, setInformation] = useState()
    const [buttons, setButtons] = useState({ edit: false, whatsApp: false, light: false, dark: false, undo: false })
    const [approvedForEditing, setApprovedForEditing] = useState(false)


    // Calculate the Days
    // const d = new Date()
    // let Difference_In_Time = d.getTime() - projects.projects[0].lastApprove.getTime()
    // let Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24))

    useEffect(() => {
        state ?
            setInformation(state)
            :
            apiCalls("get", `/project/getStepById/${templateId}/${stepId}`)
                .then(response => { setInformation(response) })
                .catch(error => { console.log("🚀 ~ file: index.jsx:57 ~ useEffect ~ error", error) });

    }, [])

    useEffect(() => {
        header.setIsTitle(true)
        switch (mode) {
            case "template":
                header.setTitle(information?.step.name)
                header.setSubTitle(information?.tempName)
                header.setIsArrow(true)
                header.setIsHamburguer(false)
                break
            case "biz":
                header.setTitle(information?.tempName)
                header.setSubTitle(information?.client?.fullName)
                header.setIsArrow(true)
                header.setIsHamburguer(false)
                break
            case "client":
                header.setTitle(information?.tempName)
                header.setSubTitle(information?.bizName)
                header.setIsArrow(false)
                header.setIsHamburguer(true)
                break
            default:
                break;
        }
        setApprovedForEditing(!(userData.permissions === "biz" && information?.creatorIdPermissions === "admin"))
        console.log("🚀 ~ file: index.jsx:92 ~ useEffect ~ approvedForEditing", !(userData.permissions === "biz" && information?.creatorIdPermissions === "admin"))
        if (information) {
            buttonsAccordingMode()
        }
        // console.log("🚀 ~ file: index.jsx ~ Step ~ mode", mode)
        console.log("🚀 ~ file: index.jsx:92 ~ useEffect ~ information", information)
    }, [information])

    useEffect(() => {
        if (mode === "client" || !approvedForEditing) {
            header.setIsDots(false)
        }
        else {
            header.setIsDots(true)
            drawer.setDrawerContentHeader(<MoreStep templateId={templateId} stepId={stepId} isTemplate={mode === "template"} isApprove={information?.step.isApprove} />)
        }
    }, [approvedForEditing])

    const handlePDF = async (fileName) => {
        console.log("🚀 🚀 🚀 ~ file: index.jsx:107 ~ handlePDF ~ handlePDF")
        axios({
            url: `${process.env.REACT_APP_BASE_URL}files/download`,
            method: "POST",
            responseType: "blob",  // important
            data: {
                // This is the body part
                bizId: userData._id,      //TODO check in client side
                templateId,
                stepId,
                fileName
            },
        }).then((response) => {
            // console.log("response.data", response.headers["content-type"]);
            const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers["content-type"] }));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", fileName);
            document.body.appendChild(link);
            link.click();
        });
    }
    const handleIMG = (fileName, widgetId) => {
        console.log("🚀🚀🚀 ~ file: index.jsx:130 ~ handleIMG ~ handleIMG")
        // console.log("🚀 ~ file: index.jsx:123 ~ handleIMG ~ information.step.data.find(data => data._id === widgetId).image", information.step.data.find(data => data._id === widgetId).image)
        if (information.step.data.find(data => data._id === widgetId).image) return

        const data = {
            // This is the body part
            bizId: userData._id,      //TODO check in client side
            templateId,
            stepId,
            fileName
        }

        apiCalls('post', '/files/showImg', data)
            .then((img) => {
                let updatedArray = information.step.data
                updatedArray.find(data => data._id === widgetId).image = `data:image/jpeg;base64,${img}`
                setInformation(current => ({ ...current, step: { ...current.step, data: updatedArray } }))
            })
            .catch((err) => console.log("🚀 ~ file: index.jsx:146 ~ handleIMG ~ err", err))
    }

    const handleUploadFile = (widget) => {
        console.log("🚀🚀🚀 ~ file: index.jsx:162 ~ handleUploadFile ~ handleUploadFile")
        const data = {
            templateId: templateId,
            stepId: stepId,
            widgetId: widget._id,
            bizId: userData._id,
        }
        switch (mode) {
            case "template": return
            case "biz":
                information.step.isCreatorApprove
                    && drawer.setDrawer(<UploadedFileView title={widget.title} data={data} setInformation={setInformation} />);
                break;
            case "client":
                !information.step.isCreatorApprove
                    && drawer.setDrawer(<UploadedFileView title={widget.title} data={data} setInformation={setInformation} />);
                break;
            default:
                break;
        }
    }
    const updateWidget = (widgetId, content) => {
        let updatedArray = information.step.data
        updatedArray.find(data => data._id === widgetId).content = content
        updatedArray.find(data => data._id === widgetId).missingData = false
        setInformation(current => ({ ...current, step: { ...current.step, data: updatedArray } }))
    }
    const handleAnswer = (widgetId, title) => {
        console.log("🚀🚀🚀 ~ file: index.jsx:171 ~ handleAnswer ~ handleAnswer")
        // console.log("🚀 ~ file: index.jsx:163 ~ handleAnswer ~ information.step.isCreatorApprove", information.step.isCreatorApprove)
        switch (mode) {
            case "template": return
            case "biz":
                information.step.isCreatorApprove
                    && drawer.setDrawer(<UploadCShortAnswer title={title} templateId={templateId} stepId={stepId} widgetId={widgetId} updateWidget={updateWidget} />);
                break;
            case "client":
                !information.step.isCreatorApprove
                    && drawer.setDrawer(<UploadCShortAnswer title={title} templateId={templateId} stepId={stepId} widgetId={widgetId} updateWidget={updateWidget} />);
                break;
            default:
                break;
        }

    }
    const completed = () => {
        const name = mode === "biz" ? information?.client?.fullName : information?.bizName;
        let missingData = false
        // console.log("🚀1 ~ file: index.jsx:205 ~ completed ~ missingData", missingData)
        information.step.data.forEach((widget, index) => {
            if ((widget.type === 'answer' || widget.type === 'file') && widget.isRequired) {
                // console.log("🚀 ~ file: index.jsx:208 ~ completed ~ widget", widget)
                // console.log("🚀 ~ file: index.jsx:209 ~ completed ~ widget.content", widget.content)

                if (!widget.content) {
                    // console.log("🚀 ~ file: index.jsx:209 ~ completed ~ !widget.content", !widget.content)
                    // information.step.data.find(widget1 => widget1 === widget).missingData = true
                    widget.missingData = true
                    setInformation(current => ({ ...current, step: { ...current.step, data: current.step.data } }))
                    missingData = true
                }
            }
        })
        // console.log("🚀 ~ file: index.jsx:214 ~ completed ~ information", information)
        // console.log("🚀 ~ file: index.jsx:215 ~ completed ~ missingData", missingData)
        if (missingData) return
        const btnNo = () => { drawer.setDrawer("") }
        const btnYes = () => {
            apiCalls('put', `/project/completeStep/${templateId}`, { stepId })
                .then((res) => {
                    // navigate(`/project/${mode}/${templateId}`)/
                    information.step.isApprove = true
                    buttonsAccordingMode()
                    drawer.setDrawerContentHeader(<MoreStep templateId={templateId} stepId={stepId} isTemplate={false} isApprove={information?.step.isApprove} />)
                })
                .catch((err) => console.log("🚀 ~ file: index.jsx:195 ~ btnYes ~ err", err))
            drawer.setDrawer("")
        }
        drawer.setDrawer(<Confirm clientName={name} nextStepName={information?.nextStepName} btnYes={btnYes} btnNo={btnNo} />)
    }
    const undo = () => {
        apiCalls('put', `/project/stepUndo/${templateId}`, { stepId })
            .then((res) => {
                information.step.isApprove = false
                buttonsAccordingMode()
                drawer.setDrawerContentHeader(<MoreStep templateId={templateId} stepId={stepId} isTemplate={false} isApprove={information?.step.isApprove} />)
            })
            .catch((err) => console.log("🚀 ~ file: index.jsx:207 ~ undo ~ err", err))
    }
    const stepEdit = () => {
        mode === "biz" ?
            navigate(`/project/biz/${templateId}/edit-step/${stepId}`, { state: information })
            :
            navigate(`/template/${templateId}/edit-step/${stepId}`, { state: information })
    }
    const buttonsAccordingMode = () => {
        switch (mode) {
            case "template":
                setButtons((current) => ({ ...current, edit: approvedForEditing }))
                break
            case "biz":
                information?.step?.isCreatorApprove ?
                    setButtons((current) => ({ ...current, edit: !information?.step.isApprove, dark: !information?.step.isApprove, undo: information?.step.isApprove }))
                    :
                    setButtons((current) => ({ ...current, light: true }))
                break
            case "client":
                information?.step?.isCreatorApprove ?
                    setButtons((current) => ({ ...current, whatsApp: true }))
                    :
                    setButtons((current) => ({ ...current, whatsApp: !information?.step.isApprove, dark: !information?.step.isApprove, undo: information?.step.isApprove }))
                break
            default:
                break;
        }
    }

    return (
        <div className={styles.page}>
            {mode === "template" ?
                <StatusStep isPreview={true} />
                :
                information?.isCurrent && (information?.step?.isCreatorApprove ?
                    <StatusStep numOfStage={information?.index + 1} user={information?.bizName} time={""/*Difference_In_Days*/} />
                    :
                    <StatusStep numOfStage={information?.index + 1} user={information?.client?.fullName} />)}

            <div className={styles.title}>{information?.step?.name}</div>
            <div className={styles.text}>{information?.step?.description}</div>
            <div className={styles.pdf} >
                {information?.step?.data.map((data, index) => {
                    // console.log("🚀 ~ file: index.jsx:257 ~ {information?.step?.data.map ~ data", data.content)
                    switch (data.type) {
                        case "img":
                            handleIMG(data.content, data._id)

                            return <ImageView
                                key={Math.random().toString()}
                                imgDescription={data.title}
                                imgPath={data.image}
                            />
                        case "pdf":
                            return <Answer src="/images/icon-btns/filePDF.svg"
                                key={Math.random().toString()}
                                onClick={() => handlePDF(data.content)}
                                title={data.title}
                                p={language.TO_VIEW_FILE_CLICK_HERE}
                                isTitleFirst={true}
                                isAdmin={false}
                            />
                        case "file":
                            if (data.content) {
                                // if (data.content.endsWith("jpeg" || "jpg" || "png")) {
                                handleIMG(data.content, data._id)
                                // }
                            }
                            return <Answer src={data.content ? data.image : "/images/icon-btns/Upload.svg"}
                                key={Math.random().toString()}
                                onClick={() => handleUploadFile(data)}
                                title={data.title}
                                p={data.content ? data.content : ` ${language.VOLUME_LIMIT} 4Mb`}
                                isTitleFirst={true}
                                isAdmin={true}
                                isDone={data.content}
                                missingData={data.missingData}
                            />
                        case "answer":
                            return <Answer src="/images/icon-btns/answer.svg"
                                key={Math.random().toString()}
                                onClick={() => handleAnswer(data._id, data.title)}
                                title={data.title}
                                p={!data.content ? `${language.FOR_HER_ANSWER_CLICK_HERE}` : `${data.content}`}
                                isTitleFirst={true}
                                isAdmin={true}
                                isDone={data.content}
                                missingData={data.missingData}
                            />
                        default: return <></>
                    }
                })}
                <div style={{ height: "100px" }}></div>
            </div>

            <div className={styles.btns}>
                {buttons.edit && <div style={{ width: "52px" }}>
                    <BtnSubmitIcon icon="pencil.svg" color="lite" func={stepEdit} />
                </div>}
                {buttons.undo && <div style={{ width: "52px" }}>
                    <BtnSubmitIcon icon="undo.svg" color="lite" func={undo} />
                </div>}
                {buttons.whatsApp &&
                    <a href={`https://wa.me/${information?.client.phoneNumber}`}>
                        <div style={{ width: "52px" }}>
                            <BtnSubmitIcon icon="whatsapp.svg" color="lite" func={""} />
                        </div>
                    </a>
                }
                {buttons.dark && <div style={{ width: "283px", marginRight: '12px' }}>
                    <BtnSubmitIcon icon="v.svg" color="gray" func={completed} />
                </div>}
                {buttons.light && <div style={{ width: "52px" }}>
                    <BtnSubmitIcon icon="v.svg" color="lite" func={() => navigate(`/project/biz/${templateId}`, { state: information })} />
                </div>}
            </div>
        </div>
    )
}
export default Step