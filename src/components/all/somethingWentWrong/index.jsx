import React from 'react'
import styles from './style.module.css'
import { languages } from '../../../functions/languages'
import mainContext from '../../../context/mainContext'
import { useContext } from 'react'
import VerifyProblem from '../VerifyProblem'
import { useNavigate } from 'react-router-dom'


export default function SomethingWentWrong(props) {
  let navigate = useNavigate()
  const { drawer } = useContext(mainContext)

  function wrongPhonFunc() {
    //go to login get new phoneNum
    console.log("wrongNumber");
    navigate('/login')
    drawer.setDrawer( )
  }
  
  function newCodeFunc() {
    // close the drawer and make the counter=1
    console.log("counter  1");
    drawer.setDrawer( )
    props.setCounter(1)
  }

  function openDrawer() {
    drawer.setDrawer(<VerifyProblem wrongPhonFunc={wrongPhonFunc} newCodeFunc={newCodeFunc} />)
    // drawer.setDrawerContent(<VerifyProblem func1={fixPhoneNum} func2={sendCodeAgain} />)
  }

  const somethingWrong = languages[0].dict.SOMETHINGS_WRONG

  return (<div className={styles.box}>

    <div
      onClick={openDrawer}
    >{somethingWrong}</div>
  </div>
  )
}
