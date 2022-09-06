import React from 'react'
import styles from "./style.module.css"
import { languages } from '../../../functions/languages'
import UserTitle from '../../../components/common/UserTitle'
import { useContext } from 'react'
import mainContext from '../../../context/mainContext'
import { useEffect,useState } from 'react'
import BtnSubmitIcon from '../../../components/common/BtnSubmitIcon'
import InputVerification from '../../../components/all/InputVerification'
import SomethingWentWrong from '../../../components/all/somethingWentWrong'
import UserNumberVerification from '../../../components/all/UserNumberVerification'
export default function Verification({ props }) {
  const { header } = useContext(mainContext)
  useEffect(() => {
    header.setIsTitle(false)
  }, [])

  const [counter,setCounter]=useState(0)
  useEffect(()=>{
    localStorage.getItem('counter',JSON.parse(counter))
  },[])
  function countUp(){
    setCounter(1)
    // useEffect(()=>{
    //     localStorage.setItem('counter',JSON.stringify(counter))
    //     console.log(counter);
    // })
  }

  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <UserTitle text={languages[0].dict.SUBMIT_CODE} />
      </div>
      <div className={styles.input}>
        <InputVerification />
      </div>
      <div className={styles.phoneNum}>
        <UserNumberVerification phoneNum={"0547668489"} />
      </div>
      <div className={styles.someThingWrong}>
        <SomethingWentWrong />
      </div>
      <div className={styles.btn}>
        <BtnSubmitIcon color='orange' icon='Arrow.svg' />
      </div>
    </div >
  )
}