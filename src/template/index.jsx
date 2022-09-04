import React from 'react'
import styles from "./style.module.css"

const Name = ({ style = {}, ...props }) => {

   return (
      <div className={styles.Name} style={style} {...props} >

      </div>
   )
}

export default Name