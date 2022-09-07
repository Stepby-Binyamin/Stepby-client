import React from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'

const AllAction = ({ newTempFunc, newUserFunc, projectToUserFunc }) => {
   const dict = languages[0].dict;
   return (
      <div className={styles.additionNew}>
         <div className={styles.btn}><BtnIcon icon='/images/icons/newTemplate.svg' text={dict.NEW_TEMPLATE} onClick={newTempFunc} />      </div>
         <div className={styles.btn1}><BtnIcon icon='/images/icons/newCustomer.svg' text={dict.NEW_CUSTOMER} onClick={newUserFunc} />      </div>
         <div><BtnIcon icon='/images/icons/newProject.svg' text={dict.NEW_PROJECT} onClick={projectToUserFunc} />      </div>
      </div>
   )
}

export default AllAction
