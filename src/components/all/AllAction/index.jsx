
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"
import React, {  useContext} from 'react'
import mainContext from "../../../context/mainContext"

const AllAction = ({ newTempFunc, newUserFunc, projectToUserFunc }) => {

   const {language}= useContext(mainContext)
   return (
      <div className={styles.additionNew}>
         <div className={styles.btn}><BtnIcon icon='/images/icons/newTemplate.svg' text={language.NEW_TEMPLATE} onClick={newTempFunc} />      </div>
         <div className={styles.btn1}><BtnIcon icon='/images/icons/newCustomer.svg' text={language.NEW_CUSTOMER} onClick={newUserFunc} />      </div>
         <div><BtnIcon icon='/images/icons/newProject.svg' text={language.NEW_PROJECT} onClick={projectToUserFunc} />      </div>
      </div>
   )
}

export default AllAction
