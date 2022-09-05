import React from 'react'
import { useState } from 'react'
import styles from './style.module.css'

export default function NavLinkTab({onClick, firstText, secondText, thirdText, counter}) {
    const [whoClicked, setWhoClicked] = useState()

    firstText = 'הכל'
    secondText = 'בטיפול שלי'
    thirdText = 'ממתין ללקוח'
    counter = 1
    counter = counter > 0? `(${counter})`: counter
    onClick = (text)=>{
        setWhoClicked(text)
    }
    
   return (
      <div className={styles.main}>
      <div className={whoClicked === firstText? styles.active : ''} onClick={()=>onClick(firstText)}>{firstText} {counter&&counter}</div>
      <div className={whoClicked === secondText? styles.active : ''} onClick={()=>onClick(secondText)}>{secondText} {counter&&counter}</div>
      { thirdText&&
      <div className={whoClicked === thirdText? styles.active : ''} onClick={()=>onClick(thirdText)}>{thirdText} {counter&&counter}</div>
      }
    </div>
   )
}