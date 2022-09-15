import { useContext, useState, useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import StatusProject from "../../../components/all/StatusProject"
import StatusTemp from "../../../components/all/StatusTemp"
import BtnHolder from "../../../components/common/BtnHolder/BtnHolder"
import ListItem from "../../../components/common/ListItem"
import mainContext from "../../../context/mainContext"
import { convertDate } from "../../../functions/convertDate"
import styles from "./style.module.css"
import UiDirectionText from "../../../components/all/UiDirectionText"
import apiCalls from "../../../functions/apiRequest"

export default function Project({ mode = "template" }) {
    const { templateId } = useParams()
    const { state } = useLocation()
    const { header, language = {} } = useContext(mainContext)
    const { COMPLET, STEP_BY_STEP, PRESS_ON, ADD_STEP } = language
    const [curr, setCurr] = useState(state&& state.temp)
    const indexFirst = findTheNext(curr)
    // const owner = findTheOwner(curr)

    useEffect(() => {
        (state && state.temp) ||
        apiCalls("get", "/project/projectById/" + templateId)
            .then((result) => setCurr(result))
    }, [])
    // console.log(curr);
    function findTheOwner(curr) {
        const result = curr.steps[indexFirst]?.isCreatorApprove
        if (result) {
            return curr.icjid
        } else {
            return "שלך"
        }
    }

    function upMove(step) {
        apiCalls("put", "/template/downSteps/" + templateId, { "stepIndex": step.index - 1 })
            .then((result) => setCurr(result))
        console.log("hay i'm up", " step index:step" + step.index--, "project id:" + curr._id);
        return
    }

    function downMove(step) {
        apiCalls("put", "/template/downSteps/" + templateId, { "stepIndex": step.index })
            .then((result) => setCurr(result))
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
        curr&&curr.steps.sort((a, b) => a.index < b.index ? -1 : 1)
        const result = curr&&curr.steps.find(step => step.isApprove === false)
        return result?.index
    }

    function createNewProject(){
        
        apiCalls('post', `/project/createProject/${templateId}`)
           .then(response => {
              console.log("banana");
           })
           .catch(error => {
              console.log(error)
           });
      }

    useEffect(() => {
        header.setTitle(curr && curr.name)
        mode !== "template" && header.setSubTitle(curr&& curr.client.clientName)
        mode === "client" ? header.setIsArrow(false) && header.setIsDots(false) : header.setIsDots(true) && header.setIsArrow(true)
    }, [])

    curr&& curr.steps?.sort((a, b) => a.index < b.index ? -1 : 1)

    return (<>
        {curr &&
            <div className={styles.container}>
                {(mode === "client" || mode === "biz") && <StatusProject isLink={mode === "client" ? false : true} />}
                {mode === "template" && <StatusTemp />}
                {curr.steps?.map(step =>
                    <ListItem
                        status={step.isCreatorApprove ? "biz" : "client"}
                        secondaryTitle={secondaryTitle(curr, step)}
                        mainTitle={step.name}
                        isFirstStep={step.index === 0 ? true : false}
                        key={step._id}
                        time={step.approvedDate && `${convertDate(step.approvedDate).time}${convertDate(step.approvedDate).type}`}
                        step={step}
                        up={upMove}
                        down={downMove}
                        id={step._id}
                        link={nav({ mode, curr, step })}
                        linkState={{tempName:curr.name, step, stepId:step._id}}

                    />)}
                {curr.steps?.length < 1 && <UiDirectionText mainTitle={STEP_BY_STEP} text1={PRESS_ON} text2={ADD_STEP} />}
                {mode === "client" && <BtnHolder buttons={[{ color: "lite", icon: "whatsapp", func: () => { console.log("Hello") }, link: '' }]} />}
                {mode === "template" && <BtnHolder buttons={curr.steps?.length < 1 ? [{ color: "gray", icon: "+", func: () => { console.log("Hello") }, link: '' }] : [{ color: "lite", icon: "triangle", func: () => createNewProject(), link: '' }, { color: "gray", icon: "+", func: () => { console.log("Hello") }, link: '' }]} />}
                {mode === "biz" && <BtnHolder buttons={[{ color: "lite", icon: "whatsapp", func: () => { console.log("Hello") }, link: '' }, { color: "gray", icon: "+", func: () => { console.log("Hello") }, link: '' }]} />}
            </div>
        }
    </>)
}