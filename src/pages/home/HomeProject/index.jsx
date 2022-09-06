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
   // const [api, setapi] = useState()
   const [sortListBy, setsortListBy] = useState(ALL)
   const { data } = useContext(dataContext)
   const { header } = useContext(mainContext)


   useEffect(() => {

      header.setIsTitle(false)
      header.setIsArrow(false)
      console.log(data.projects[0]);
   }, [])

   return (
      <div className={styles.HomeProject} style={style} {...props} >

         <NavLink firstText={PROJECTS} secondText={TEMPLATES} />
         <NavLinkTab state={sortListBy} setState={setsortListBy} firstText={ALL} secondText={MY_CARE} thirdText={WAITING_CUSTOMER} counter={1} />

         <ul className={styles.list}>
            {data.projects &&
               data.projects.length === 0 ?

               <div className={styles.noProjects} >
                  <div className={styles.noProjectsContainer}>
                     <div className={styles.letStart} >{LETS_GO}</div>
                     <div className={styles.iconCall} >{ICON}<img src='/images/icons/iconCallYou.svg' alt="iconCallYou" /> {CALL_YOU}</div>
                  </div>
               </div> :

               sortListBy === ALL ?
                  data.projects.map(item =>
                     <ListItem
                        key={item._id}
                        inTreatmentOf={item.status}
                        mainTitle={item.client.clientName}
                        secondaryTitle={item.name}
                        sconderyBoldTitle={item.steps[0].name}  //get current temp
                        time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
                        link  //path
                     />
                  ) :

                  sortListBy === MY_CARE ?

                     data.projects.map(item =>{ item.status==="biz" &&
                        <ListItem
                           key={item._id}
                           inTreatmentOf={item.status}
                           mainTitle={item.client.clientName}
                           secondaryTitle={item.name}
                           sconderyBoldTitle={item.steps[0].name}  //get current temp
                           time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
                           link  //path
                        />}
                     ) :

                     sortListBy === WAITING_CUSTOMER ?

                        data.projects.map(item =>{item.status==="client" &&
                           <ListItem
                              key={item._id}
                              inTreatmentOf={item.status}
                              mainTitle={item.client.clientName}
                              secondaryTitle={item.name}
                              sconderyBoldTitle={item.steps[0].name}  //get current temp
                              time={item.status === "done" ? "" : `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`}
                              link  //path
                           />}
                        ) :
                        <div>error</div>
            }
         </ul>
      </div>
   )
}

export default HomeProject