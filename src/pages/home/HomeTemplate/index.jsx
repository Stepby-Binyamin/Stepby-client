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

const HomeTemplate = ({ style = {}, ...props }) => {
   const navigate = useNavigate()
   const { userData } = useContext(userContext)
   const { header, drawer, language } = useContext(mainContext)

   const [isAdmin, setIsAdmin] = useState(false)
   const [displayTemplates, setDisplayTemplates] = useState()
   const [templatesByUser, setTemplatesByUser] = useState()
   const [templatesByUserLength, setTemplatesByUserLength] = useState()
   const [recommend, setRecommend] = useState()
   const [choose, setChoose] = useState(language.MY_TEMP)

   useEffect(() => {
      header.setIsTitle(false)
      header.setIsArrow(false)

      apiCalls('get', '/template/templateByUser')
         .then(response => {
            setTemplatesByUser(response);
            setDisplayTemplates(response)
            setTemplatesByUserLength(response.length)
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
      console.log("userData: " + userData);
      setIsAdmin(userData?.permissions === 'admin' ? true : false);
   }, [userData])

   useEffect(() => {
      choose === language.MY_TEMP ? setDisplayTemplates(templatesByUser) : setDisplayTemplates(recommend)
   }, [choose])

   const createNewTemplate = async (templateName) => {
      console.log(templateName);
      apiCalls("post", "/template/createTemplate", templateName)
         .then(() => {
            apiCalls('get', '/template/templateByUser')
               .then(res => {
                  setDisplayTemplates(res);
                  navigate(`/template/${res[res.length - 1]._id}`)
               })
               .catch(error => {
                  console.log(error)
               });
         })
         .catch(error => {
            console.log(error)
         });

   }
   const createNewTemplateAdmin = async (data) => {
      apiCalls("post", "/template/createTemplateAdmin", { ...data, categories: data.res })
         .then((res) => {
            navigate(`/template/${res.message._id}`)
         })
   }
   const createClient = () => {
      drawer.setDrawer(<CreateClient />)
   }
   const createProject = () => {
      drawer.setDrawer(<CreateProject />)
   }
   const createTemp = () => {
      isAdmin ?
         drawer.setDrawer(<CreateTemplateGeneral printData={printData} NewAdminTemplate={createNewTemplateAdmin} />) :
         drawer.setDrawer(<CreateTemplate createNewTemplate={createNewTemplate} printData={printData} />)
   }
   const openDrawer = () => {
      drawer.setDrawer(<AllAction newTempFunc={createTemp} newUserFunc={createClient} projectToUserFunc={createProject} />)
   }
   const printData = (d) => {
      console.log("printData:", d);
   }

   return (
      <div className={styles.HomeTemplate} style={style} {...props} >

         <NavLink firstText={language.PROJECTS} secondText={language.TEMPLATES} />
         <NavLinkTab state={choose} setState={setChoose} firstText={language.MY_TEMP} secondText={language.RECOMENDED} counter={templatesByUserLength} />

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
                     linkState={{ temp: item, mode: "template" }}
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