import React, { useState, useEffect, useContext } from 'react'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'
import { convertDate } from '../../../functions/convertDate'
import mainContext from '../../../context/mainContext'
import dataContext from '../../../context/dataContext'
import NavLink from '../../../components/common/NavLink'
import NavLinkTab from '../../../components/common/NavLinkTab'
import ListItem from '../../../components/common/ListItem'

const HomeTemplate = ({ style = {}, ...props }) => {

   const { MY_TEMP, RECOMENDED, LAST_DUPLICATED, CREATED_BY, PROJECTS, TEMPLATES } = languages[0].dict
   const { header } = useContext(mainContext)
   const { data } = useContext(dataContext)
   const [dataState, setDataState] = useState(data.projects)
   const [recomend, setRecomend] = useState()
   const [sortListBy, setSortListBy] = useState(MY_TEMP)


   const tempCounter = data.projects && data.projects.filter(item => item.isTemplate).length

   useEffect(() => {
      header.setIsTitle(false)
      header.setIsArrow(false)
   }, [])


   return (
      <div className={styles.HomeTemplate} style={style} {...props} >

         <NavLink firstText={PROJECTS} secondText={TEMPLATES} />
         <NavLinkTab state={sortListBy} setState={setSortListBy} firstText={MY_TEMP} secondText={RECOMENDED} counter={tempCounter} />

         <ul className={styles.list}>
            {!dataState ? <div>loading...</div> :

               dataState.map(item =>
                  <ListItem
                     key={item._id}
                     mainTitle={item.name}
                     secondaryTitle={sortListBy === MY_TEMP ?
                        `${LAST_DUPLICATED}${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}` : //get correct date
                        `${CREATED_BY}${item.creatorId}`}   // get user name
                     link={`/template/${item._id}`}  //path
                  />)

            }
         </ul>
      </div>
   )
}

export default HomeTemplate