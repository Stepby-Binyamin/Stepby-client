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
import userContext from '../../../context/userContext'

const HomeTemplate = ({ style = {}, ...props }) => {
   // const { userData, setUserData } = useContext(userContext)
   // console.log(userData);


   const admin = true

   const { MY_TEMP, RECOMENDED, LAST_DUPLICATED, CREATED_BY, PROJECTS, TEMPLATES } = languages[0].dict
   const { header, drawer } = useContext(mainContext)
   const { data } = useContext(dataContext)
   const [dataState, setDataState] = useState(data.projects)  //temp created && used by doron
   const [recomend, setRecomend] = useState(data.projects)     //temp created by admin under Doron’s business vertical
   const [sortListBy, setSortListBy] = useState(MY_TEMP)
   const navigate = useNavigate()

   const filterTemp = dataState && dataState.filter(item => item.isTemplate)
   const dataToPrint = sortListBy === MY_TEMP ? filterTemp : recomend

   const tempCounter = filterTemp.length

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
      admin ? drawer.setDrawer(<CreateTemplateGeneral printData={printData} />) :
         drawer.setDrawer(<CreateTemplate printData={printData} />)
   }
   const openDrawer = () => {
      drawer.setDrawer(<AllAction newTempFunc={createTemp} newUserFunc={createClient} projectToUserFunc={createProject} />)
   }

   const printData = (d) => {
      console.log("printData:", d);
   }

   return (
      <div className={styles.HomeTemplate} style={style} {...props} >

         <NavLink firstText={PROJECTS} secondText={TEMPLATES} />
         <NavLinkTab state={sortListBy} setState={setSortListBy} firstText={MY_TEMP} secondText={RECOMENDED} counter={tempCounter} />

         <ul className={styles.list}>
            {
               // !dataToPrint ? <div>loading...</div> :

               dataToPrint.map(item =>
                  <ListItem
                     key={item._id}
                     mainTitle={item.name}  // get corect name
                     secondaryTitle={sortListBy === MY_TEMP ? LAST_DUPLICATED : CREATED_BY}   // get user name
                     secondaryTitleWeight={sortListBy === MY_TEMP ?
                        `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}` : //get correct duplication date}  
                        item.creatorId}
                     link={`/template/${item._id}`}  //path
                  />)

            }
         </ul>

         {sortListBy === MY_TEMP &&
            <img src='/images/icon-btns/drawerIcon.svg' alt='drawer' className={styles.drw} onClick={openDrawer} />
         }
      </div>
   )
}

export default HomeTemplate