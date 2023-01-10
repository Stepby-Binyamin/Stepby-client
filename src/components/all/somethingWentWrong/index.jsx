import React from 'react'
import styles from './style.module.css'
import mainContext from '../../../context/mainContext'
import { useContext } from 'react'
import VerifyProblem from '../VerifyProblem'
import { useNavigate } from 'react-router-dom'

const SomethingWentWrong = ({ sendCode, setCounter, setWrongPassword }) => {
  const navigate = useNavigate()
  const { drawer, language } = useContext(mainContext)

  const wrongPhonFunc = () => {
    //go to login get new phoneNum
    console.log("wrongNumber");
    navigate('/login')
    drawer.setDrawer()
    setWrongPassword(false)
  }
  const newCodeFunc = () => {
    sendCode()
    // close the drawer and make the counter=1
    console.log("counter  1");
    drawer.setDrawer()
    setCounter(1)
    setWrongPassword(false)
  }
  const openDrawer = () => {
    drawer.setDrawer(<VerifyProblem wrongPhonFunc={wrongPhonFunc} newCodeFunc={newCodeFunc} />)
    // drawer.setDrawerContent(<VerifyProblem wrongPhonFunc={wrongPhonFunc} newCodeFunc={newCodeFunc} />)
  }

  return (
    <div className={styles.box}>
      <div onClick={openDrawer}>{language.SOMETHINGS_WRONG}</div>
    </div>
  )
}
export default SomethingWentWrong
