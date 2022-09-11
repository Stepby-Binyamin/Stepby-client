import { useContext, useState, version } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import StatusProject from "../../../components/all/StatusProject"
import StatusTemp from "../../../components/all/StatusTemp"
import BtnHolder from "../../../components/common/BtnHolder/BtnHolder"
import ListItem from "../../../components/common/ListItem"
import mainContext from "../../../context/mainContext"
import fakeProjects from "../../../data/fakeProjects"
import { languages } from "../../../functions/languages"
import { convertDate } from "../../../functions/convertDate"
import styles from "./style.module.css"
import UiDirectionText from "../../../components/all/UiDirectionText"

export default function Project({ mode = "client" }) {
    const { header } = useContext(mainContext)
    const { COMPLET ,STEP_BY_STEP } = languages[0].dict
    const [curr, setCurr] = useState(fakeProjects.projects[0])

    const indexFirst = findTheNext(curr)
    // const owner = findTheOwner(curr)

    function findTheOwner(curr) {
        const result = curr.steps[indexFirst].isCreatorApprove
        if (result) {
            return curr.client.clientName
        } else {
            return "שלך"
        }
    }
    function upMove(id) {

        return 
    }
    function downMove(id) {
        return 
    }
    function secondaryTitle(curr, step) {
        return step.isApprove === true ? COMPLET : indexFirst === step.index && `בטיפול ${findTheOwner(curr)}`
    }
    function nav({ mode, curr, step }) {
        if (mode === "client")
            return `project/client/${curr._id}/step/${step._id}`

        if (mode === "template")
            return `/template/${curr._id}/edit-step/${step._id}`

        if (mode === "biz")
            return `project/biz/${curr._id}/edit-step/${step._id}`

    }

    function findTheNext(curr) {
        curr.steps.sort((a, b) => a.index < b.index ? -1 : 1)
        const result = curr.steps.find(step => step.isApprove === false)
        return result?.index
    }

    useEffect(() => {
        header.setTitle(fakeProjects.projects[0].name)
        mode !== "template" && header.setSubTitle(fakeProjects.projects[0].client.clientName)
        mode === "client" ? header.setIsArrow(false) && header.setIsDots(false) : header.setIsDots(true) && header.setIsArrow(true)
    }, [])

    curr.steps.sort((a, b) => a.index < b.index ? -1 : 1) 

    return (<>
        <div className={styles.container}>
            {(mode === "client" || mode === "biz") && <StatusProject isLink={mode === "client" ? false : true} />}
            {mode === "template" && <StatusTemp />}
            {curr.steps.map(step =>
                    <ListItem
                        status={step.isCreatorApprove ? "biz" : "client"}
                        secondaryTitle={secondaryTitle(curr, step)}
                        mainTitle={step.name}
                        isFirstStep={step.index === 0 ? true : false}
                        key={step._id}
                        time={`${convertDate(step.approvedDate).time}${convertDate(step.approvedDate).type}`}
                        up={upMove}
                        down={downMove}
                        id={step._id}
                        link={nav({ mode, curr, step })}
                    />)}
            {curr.steps.length < 1 && <UiDirectionText mainTitle= {STEP_BY_STEP}/>}
            {(mode === "client") && <BtnHolder buttons={[{ color: "lite", icon: "whatsapp", func: () => { console.log("Hello") }, link: '' }]} />}
            {mode === "template" && <BtnHolder buttons={[{ color: "lite", icon: "triangle", func: () => { console.log("Hello") }, link: '' }, { color: "gray", icon: "+", func: () => { console.log("Hello") }, link: '' }]} />}
            {mode === "biz" && <BtnHolder buttons={[{ color: "lite", icon: "whatsapp", func: () => { console.log("Hello") }, link: '' }, { color: "gray", icon: "+", func: () => { console.log("Hello") }, link: '' }]} />}
        </div>
    </>)
}