import React from 'react'
import styles from "./style.module.css"

const subtitle = 'כדי להתחיל פרויקט עבור לקוח שיצרת במערכת, עליך לבחור תבנית מרשימת התבניות וללחוץ על האייקון המשולש (Play) בפינה השמאלית התחתונה של מסך התבנית שבחרת.'
const CreateProject = ({ style = {}, ...props }) => {

//TODO: insert template button

   return (
      <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className= {styles.title}>מתחילים?</div>
        <div className={styles.subtitle}>{subtitle}</div>
        <img src= '\images\createProject.svg' alt="" />
        <button>Example</button>
        </div>
      </div>
   )
}

export default CreateProject;