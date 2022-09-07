import { useContext } from "react"
import { useEffect } from "react"
import StatusProject from "../../../components/all/StatusProject"
import ListItem from "../../../components/common/ListItem"
import mainContext from "../../../context/mainContext"
import fakeProjects from "../../../data/fakeProjects"
import styles from "./style.module.css"

export default function Project({ mode }) {
    const { header } = useContext(mainContext)


    useEffect(() => {
        header.setTitle(fakeProjects.projects[0].name)
        header.setSubTitle(fakeProjects.projects[0].client.clientName)
    
        {/* <ListItem status="biz" isFirstStep="true" mainTitle="פגישת התנעה ואפיון" secondaryTitle="בהמתנה לדורון"/> */ }
    }, [])

    return (<>
        <StatusProject isLink= {false} />
        {/* connect to real databace and filter by email/ phone */}
        {/* to change isFirstStep to notFirstStep and to connect to index */}
        {fakeProjects.projects[0].steps.map(v => <ListItem mainTitle={v.name}  secondaryTitle={"done"} isFirstStep= {v.isFirstStep} key={v._id} />)}
    
    </>)
}