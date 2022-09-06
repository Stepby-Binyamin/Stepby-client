import React from 'react'
import styles from './style.module.css'
import { languages } from '../../../functions/languages'
// import  {ContextProvider}  from '../../../context/manageContext'
import { useEffect } from 'react'

export default function SomethingWentWrong(props) {
// let x=ContextProvider.
    const somethingWrong= languages[0].dict.SOMETHINGS_WRONG
    
 return (<div className={styles.box}>
  
    <div
     onClick={props.countUp}
    >{somethingWrong}</div>
  </div>
  )
}
