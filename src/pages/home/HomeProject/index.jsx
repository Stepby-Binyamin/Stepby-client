import React, { useState, useEffect, useContext } from 'react'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'
import { convertDate } from '../../../functions/convertDate'
import mainContext from '../../../context/mainContext'
import dataContext from '../../../context/dataContext'
import NavLink from '../../../components/common/NavLink'
import NavLinkTab from '../../../components/common/NavLinkTab'
import ListItem from '../../../components/common/ListItem'

const HomeProject = ({ style = {}, ...props }) => {

   const { PROJECTS, TEMPLATES, ALL, MY_CARE, WAITING_CUSTOMER, LETS_GO, ICON, CALL_YOU } = languages[0].dict
   const { header } = useContext(mainContext)
   const { data } = useContext(dataContext)
   const [dataState, setDataState] = useState(data.projects)
   const [sortListBy, setsortListBy] = useState(ALL)
   const [sortDirection, setSortDirection] = useState(false)

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

         <div className={styles.sortDirection} onClick={() => setSortDirection(!sortDirection)} >
            {sortDirection ?
               <img src='/images/icon-btns/1to2.svg' alt='sort by date' /> :
               <img src='/images/icon-btns/2to1.svg' alt='sort by date' />
            }
         </div>
      </div>
   )
}

export default HomeProject
