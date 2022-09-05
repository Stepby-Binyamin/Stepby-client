import React from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"

const AdditionNew = ({ style = {}, ...props }) => {

   return (
      <div className={styles.additionNew}>
         <div className={styles.btn}><BtnIcon icon='/images/icons/newTemplate.svg' text='תבנית חדשה' />      </div>
         <div className={styles.btn1}><BtnIcon icon='/images/icons/newCustomer.svg' text='לקוח חדש' />      </div>
         <div><BtnIcon icon='/images/icons/newProject.svg' text='פרויקט חדש ללקוח קיים ' />      </div>
      </div>
   )
}

export default AdditionNew