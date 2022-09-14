import React, { useContext} from 'react'
import styles from "./style.module.css"
import BtnSubmitText from '../../common/BtnSubmitText'

import mainContext from '../../../context/mainContext'


const CreateProject = ({ style = {}, ...props }) => {

   const { drawer ,language} = useContext(mainContext)

   return (
      <div className={styles.container}>
         <div className={styles.innerContainer}>
            <div className={styles.title}>{language.START}</div>
            <div className={styles.subtitle}>{language.START_P}</div>
            <img src='\images\createProject.svg' alt="" />
            <div className={styles.btnContainer}>
               <BtnSubmitText color={'gray'} icon={'v to text.svg'} text={language.UNDERSTOOD} func={()=>drawer.setDrawer(false)} />
            </div>
         </div>
      </div>
   )
}

export default CreateProject;