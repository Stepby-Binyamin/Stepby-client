import { useContext, useState, version } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import StatusProject from "../../../components/all/StatusProject"
import StatusTemp from "../../../components/all/StatusTemp"
import BtnHolder from "../../../components/common/BtnHolder/BtnHolder"
import ListItem from "../../../components/common/ListItem"
import mainContext from "../../../context/mainContext"
import fakeProjects from "../../../data/fakeProjects"
import { convertDate } from "../../../functions/convertDate"
import styles from "./style.module.css"
import UiDirectionText from "../../../components/all/UiDirectionText"

export default function Project({ mode = "template" }) {
    const { header, language } = useContext(mainContext)
    const { COMPLET ,STEP_BY_STEP,PRESS_ON,ADD_STEP } = language
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

    function fetchData(index, id) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        let raw = JSON.stringify({
            "stepIndex": index
        });
        let requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("http://localhost:5000/template/downSteps/"+ id, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    function upMove(step) {
        fetchData(step.index,curr._id )
        console.log("hay i'm up", " step index:" + step.index--, "project id:" + curr._id);
        return
    }
    
    function downMove(step) {
        fetchData(step.index,curr._id )
        console.log("hay i'm down", " step index:" + step.index, "project id:" + curr._id);
        return
    }

    function secondaryTitle(curr, step) {
        return step.isApprove === true ? COMPLET : indexFirst === step.index && `בטיפול ${findTheOwner(curr)}`
    }

    function nav({ mode, curr, step }) {
        if (mode === "client")
            return `/project/client/${curr._id}/step/${step._id}`

        if (mode === "template")
            return `/template/${curr._id}/edit-step/${step._id}`

        if (mode === "biz")
            return `/project/biz/${curr._id}/edit-step/${step._id}`
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
                    step={step}
                    up={upMove}
                    down={downMove}
                    id={step._id}
                    link={nav({ mode, curr, step })}
                />)}
            {curr.steps.length < 1 && <UiDirectionText mainTitle={STEP_BY_STEP} text1={PRESS_ON} text2={ADD_STEP} />}
            {mode === "client" && <BtnHolder buttons={[{ color: "lite", icon: "whatsapp", func: () => { console.log("Hello") }, link: '' }]} />}
            {mode === "template" && <BtnHolder buttons={curr.steps.length < 1 ? [{ color: "gray", icon: "+", func: () => { console.log("Hello") }, link: '' }] : [{ color: "lite", icon: "triangle", func: () => { console.log("Hello") }, link: '' }, { color: "gray", icon: "+", func: () => { console.log("Hello") }, link: '' }]} />}
            {mode === "biz" && <BtnHolder buttons={[{ color: "lite", icon: "whatsapp", func: () => { console.log("Hello") }, link: '' }, { color: "gray", icon: "+", func: () => { console.log("Hello") }, link: '' }]} />}
        </div>
    </>)
}