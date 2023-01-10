
import styles from './style.module.css';
import React, { useContext } from 'react'
import mainContext from "../../../context/mainContext"

const TemplateEdit = () => {
  const { language } = useContext(mainContext)
  const info = language.CREATION_MODE

  return (<>
    <div className={styles.templateEdit}>
      <img src="/images/icons/iconPage.svg" alt="" />
      <div className={styles.templateEditInfo}>
        {info}
      </div>
    </div>
  </>
  )
}
export default TemplateEdit