
import styles from './style.module.css';
import React, {  useContext} from 'react'
import mainContext from "../../../context/mainContext"

export default function TemplateEdit() {
  const {language}= useContext(mainContext)
  const info = "מצב יצירה ועריכת תבנית"
  return (<>
    <div className={styles.templateEdit}>
      <img src="/images/icons/iconPage.svg" />
      <div className={styles.templateEditInfo}>
        {info}
      </div>
    </div> 
  </>
  )
}
