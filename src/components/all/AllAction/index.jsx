import React from 'react'
import BtnIcon from '../../common/BtnIcon'
import styles from "./style.module.css"

const AllAction = ({ style = {}, func1, func2, func3, ...props }) => {

   return (
      <div className={styles.additionNew}>
         <div className={styles.btn}><BtnIcon icon='/images/icons/newTemplate.svg' text='תבנית חדשה' onClick={func1} />      </div>
         <div className={styles.btn1}><BtnIcon icon='/images/icons/newCustomer.svg' text='לקוח חדש' onClick={func2} />      </div>
         <div><BtnIcon icon='/images/icons/newProject.svg' text='פרויקט חדש ללקוח קיים ' onClick={func3} />      </div>
      </div>
   )
}

export default AllAction