import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'
import { convertDate } from '../../../functions/convertDate'
import mainContext from '../../../context/mainContext'
import dataContext from '../../../context/dataContext'
import NavLink from '../../../components/common/NavLink'
import NavLinkTab from '../../../components/common/NavLinkTab'
import ListItem from '../../../components/common/ListItem'
import AllAction from '../../../components/all/AllAction'
import CreateClient from '../../../components/all/CreateClient'
import CreateProject from '../../../components/all/CreateProject'
import CreateTemplate from '../../../components/all/CreateTemplate'
import CreateTemplateGeneral from '../../../components/all/CreateTemplateGeneral'
import BtnHolder from '../../../components/common/BtnHolder/BtnHolder'


const HomeProject = ({ style = {}, ...props }) => {

   const { PROJECTS, TEMPLATES, ALL, MY_CARE, WAITING_CUSTOMER, LETS_GO, ICON, CALL_YOU } = languages[0].dict
   const { header, drawer } = useContext(mainContext)
   const { data } = useContext(dataContext)
   const [dataState, setDataState] = useState(data.projects)
   const [sortListBy, setsortListBy] = useState(ALL)
   const [sortDirection, setSortDirection] = useState(false)
   const navigate = useNavigate()

   // data.projects=[]
   const bizCounter = data.projects && data.projects.filter(item => item.status === 'biz').length
   const clientCounter = data.projects && data.projects.filter(item => item.status === 'client').length

   function getData(dataArr, searchBy) {
      const filterByStatus =
         sortListBy === ALL ? dataArr :
            sortListBy === MY_CARE ? dataArr.filter(item => item.status === 'biz') :
               dataArr.filter(item => item.status === 'client')

      const sortByDate = filterByStatus.sort((a, b) => {
         return searchBy ? (new Date(b.lastApprove).getTime() - new Date(a.lastApprove).getTime()) :
            (new Date(a.lastApprove).getTime() - new Date(b.lastApprove).getTime())
      })

      const activeStatus = sortByDate.filter(item => item.status !== 'done')
      const doneStatus = sortByDate.filter(item => item.status === 'done')
      return { activeStatus, doneStatus }
   }

   const dataToPrint = data.projects && getData(data.projects, sortDirection)

   useEffect(() => {
      header.setIsTitle(false)
      header.setIsArrow(false)
   }, [])

   const createClient = () => {
      drawer.setDrawer(<CreateClient />)
   }
   const createProject = () => {
      // navigate('/home/templates')
      drawer.setDrawer(<CreateProject />)
   }
   const createTemp = () => {
      // navigate('/template')
      drawer.setDrawer(<CreateTemplate />)
      // drawer.setDrawer(<CreateTemplateGeneral />)  // if admin
   }
   const openDrawer = () => {
      drawer.setDrawer(<AllAction newTempFunc={createTemp} newUserFunc={createClient} projectToUserFunc={createProject} />)

   }
   const handleDirection = () => {
      setSortDirection(!sortDirection)
   }

   return (
      <div className={styles.HomeProject} style={style} {...props} >

         <NavLink firstText={PROJECTS} secondText={TEMPLATES} />
         <NavLinkTab state={sortListBy} setState={setsortListBy} firstText={ALL} secondText={MY_CARE} thirdText={WAITING_CUSTOMER} counter2={bizCounter} counter3={clientCounter} />

         <ul className={styles.list}>
            {
               // !dataState ? <div>loading...</div> : 
               (
                  dataState.length === 0 ?

                     <div className={styles.noProjects} >
                        <div className={styles.noProjectsContainer}>
                           <div className={styles.letStart} >{LETS_GO}</div>
                           <div className={styles.iconCall} >
                              {ICON}
                              <img src='/images/icons/iconCallYou.svg' alt="iconCallYou" className={styles.iconCallIcon} />
                              {CALL_YOU}
                           </div>
                        </div>
                     </div> :
                     <>{
                        dataToPrint.activeStatus.map(item =>
                           <ListItem
                              key={item._id}
                              status={item.status}  // item.steps[0].status
                              mainTitle={item.client.clientName}
                              secondaryTitle={item.name}
                              sconderyBoldTitle={item.steps[0].name}  //get current temp
                              time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
                              link={`/project/${item._id}`}  //path
                           />)
                     }{
                           dataToPrint.doneStatus && dataToPrint.doneStatus.map(item =>
                              <ListItem
                                 key={item._id}
                                 status={item.status}  // item.steps[0].status
                                 mainTitle={item.client.clientName}
                                 secondaryTitle={item.name}
                                 sconderyBoldTitle={item.steps[0].name}  //get current temp
                                 time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
                                 link={`/project/${item._id}`}  //path
                              />)
                        }</>
               )}
         </ul>
         <BtnHolder buttons={[{ color: "lite", icon: sortDirection ? "1to2" : "2to1", func: handleDirection }, { color: "gray", icon: "+", func: openDrawer }]} />
      </div>
   )
}

export default HomeProject
