import React from 'react'
import styles from './style.module.css';


export default function TemplateEdit() {
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
