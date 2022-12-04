import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./style.module.css"
import { convertDate } from '../../../functions/convertDate'
import mainContext from '../../../context/mainContext'
import NavLink from '../../../components/common/NavLink'
import NavLinkTab from '../../../components/common/NavLinkTab'
import ListItem from '../../../components/common/ListItem'
import AllAction from '../../../components/all/AllAction'
import CreateClient from '../../../components/all/CreateClient'
import CreateProject from '../../../components/all/CreateProject'
import CreateTemplate from '../../../components/all/CreateTemplate'
import CreateTemplateGeneral from '../../../components/all/CreateTemplateGeneral'
import BtnHolder from '../../../components/common/BtnHolder/BtnHolder'
import apiCalls from '../../../functions/apiRequest'
import userContext from '../../../context/userContext'

const HomeTemplate = ({ style = {} }) => {
   const { userData } = useContext(userContext)
   const { header, drawer, language } = useContext(mainContext)

   const [isAdmin, setIsAdmin] = useState(false)
   const [templatesByUser, setTemplatesByUser] = useState()
   const [recommend, setRecommend] = useState()
   const [displayTemplates, setDisplayTemplates] = useState()
   const [choose, setChoose] = useState(language.MY_TEMP)

   useEffect(() => {
      header.setIsTitle(false)
      header.setIsArrow(false)

      apiCalls('get', '/template/templateByUser')
         .then(response => {
            setTemplatesByUser(response);
            setDisplayTemplates(response)
         })
         .catch(error => {
            console.log(error)
         });

      apiCalls('get', '/template/categoriesByUser')
         .then(response => {
            setRecommend(response);
         })
         .catch(error => {
            console.log(error)
         });
   }, [])
   useEffect(() => {
      setIsAdmin(userData?.permissions === 'admin' ? true : false);
   }, [userData])
   useEffect(() => {
      choose === language.MY_TEMP ? setDisplayTemplates(templatesByUser) : setDisplayTemplates(recommend)
   }, [choose])

   const createClient = () => {
      drawer.setDrawer(<CreateClient />)
   }
   const createProject = () => {
      drawer.setDrawer(<CreateProject />)
   }
   const createTemp = () => {
      isAdmin ?
         drawer.setDrawer(<CreateTemplateGeneral />) :
         drawer.setDrawer(<CreateTemplate />)
   }
   const openDrawer = () => {
      drawer.setDrawer(<AllAction newTempFunc={createTemp} newUserFunc={createClient} projectToUserFunc={createProject} />)
   }

   return (
      <div className={styles.HomeTemplate} style={style} >
         <NavLink />
         <NavLinkTab
            state={choose}
            setState={setChoose}
            firstText={language.MY_TEMP}
            secondText={language.RECOMENDED}
            counter={templatesByUser?.length} />
         <ul className={styles.list}>
            {
               (displayTemplates?.map(item =>
                  <ListItem
                     key={item._id}
                     mainTitle={item.name}
                     secondaryTitle={choose === language.MY_TEMP ? language.LAST_DUPLICATED : language.CREATED_BY}
                     secondaryTitleWeight={choose === language.MY_TEMP ?
                        `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}` :
                        `${item.creatorId.firstName} ${item.creatorId.lastName}`}
                     link={`/template/${item._id}`}
                     linkState={{ temp: item }}
                  />))
            }
         </ul>
         {choose === language.MY_TEMP &&
            <BtnHolder buttons={[{ color: "gray", icon: "+", func: openDrawer }]} />
         }
      </div>
   )
}
export default HomeTemplate