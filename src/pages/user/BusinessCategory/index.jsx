import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BtnCheckBox from '../../../components/common/BtnCheckBox'
import BtnSubmitIcon from '../../../components/common/BtnSubmitIcon'
import UserTitle from '../../../components/common/UserTitle'
import mainContext from '../../../context/mainContext'
import userContext from '../../../context/userContext'
import projects from '../../../data/fakeProjects'
import apiCalls from '../../../functions/apiRequest'
import styles from './style.module.css'

export default function BusinessCategory() {

  const [language, setLanguage] = useState(JSON.parse(localStorage.language)),
    { header } = useContext(mainContext),
    { userData, setUserData } = useContext(userContext),
    [info, setInfo] = useState(),
    navigate = useNavigate(),
    dataTest = [];
  projects.categories.map((i) => {
    dataTest.push({ key: i.name + "A", title: i.name, isActive: false })
  })

  useEffect(() => {
    header.setIsTitle(false)
    setInfo(dataTest)
    header.setIsHeaderSet(false)
    setLanguage(JSON.parse(localStorage.language))
    if (userData.categories) {
      header.setIsArrow(false)
    }
  }, [])

  const goToNextPage = (newUser) => {
    console.log(1234555, info);
    apiCalls('put', '/user/edit-biz', { info: info }).then(res => {
      console.log(res);
      setUserData(res)
      newUser ? navigate('/projects')
        : navigate(-1)
    }).catch(err => console.log(err))

  }

  const handleClick = (name) => {
    const result = info.map(elem => elem.title === name ? ({ ...elem, isActive: !elem.isActive }) : elem)
    setInfo(result)
  }

  return (<>
    <div className={styles.title}><UserTitle text1={`${userData?.firstName}, ${language.AREAS_PRACTICE} ${userData?.bizName}?`} /></div>
    {info?.map(elem => <div className={styles.buttons} key={elem.title + "abc"}><BtnCheckBox name={elem.title} id={elem.title} key={elem.title} handleClick={handleClick} isActive={elem.isActive} /></div>)}
    {/* במידה וזה משתמש חדש צריך למשוך לו את הקטגוריות הדיפולטיביות מהדאטא בייס. אם זה משתמש קיים אז למשוך לו מהפרטי יוזר */}
    {/* //  {newUser? console.log("dd"):
  {/* //   // {data?.map(elem => <BtnCheckBox name={elem.title} id={elem.title} key={elem.title} handleClick={handleClick} isActive={elem.isActive} />}} */}

    <BtnSubmitIcon color='orange' icon={userData?.categories ? 'v to text.svg' : 'Arrow.svg'} func={() => goToNextPage(userData?.categories ? false : true)} />
  </>)
}
