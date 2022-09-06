import React from 'react'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'
import UserTitle from '../../../components/common/UserTitle'
import Input from '../../../components/common/Input/Input'
import { useContext } from 'react'
import mainContext from '../../../context/mainContext'
import { useEffect } from 'react'
import BtnSubmitIcon from '../../../components/common/BtnSubmitIcon'
export default function UserName({newUser = false, firstName, lastName}) {
  
    const {header} = useContext(mainContext)
    useEffect(()=>{
        header.setIsTitle(false)
    },[])
    
  return (
    <div className={styles.box}>
        <div className={styles.title}>
        <UserTitle text={languages[0].dict.PERSONAL_INFORMATION}/>
        </div>
        <div className={styles.input}> 
        <Input placeholder={newUser && languages[0].dict.FIRST_NAME} defaultValue={!newUser ?  firstName : ''} />
        <Input placeholder={newUser &&  languages[0].dict.LAST_NAME} defaultValue={!newUser ? lastName : ''}/>
        {newUser && <Input placeholder={languages[0].dict.EMAIL}/>}
        </div>
        <div className={styles.btn}>
       {newUser ? <BtnSubmitIcon color='orange' icon='Arrow.svg'/> : <BtnSubmitIcon color='orange' icon='v to text.svg'/>}
        </div>
    </div>
  )
}