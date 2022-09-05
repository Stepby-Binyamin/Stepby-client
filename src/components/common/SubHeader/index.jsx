import React from 'react'
import styles from "./style.module.css"
function SubHeader({text}) {
  return (
    <div className={styles.box}>
    <h1>{text}</h1>
    </div>
  )
}

export default SubHeader