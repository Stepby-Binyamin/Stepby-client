import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BtnCheckBox from '../../../components/common/BtnCheckBox'
import BtnSubmitIcon from '../../../components/common/BtnSubmitIcon'
import UserTitle from '../../../components/common/UserTitle'
import mainContext from '../../../context/mainContext'
import projects from '../../../data/fakeProjects'
import { languages } from '../../../functions/languages'
import styles from './style.module.css'

export default function BusinessCategory({ newUser = true }) {

  const { header } = useContext(mainContext),
    [info, setInfo] = useState(),
    navigate = useNavigate(),
    location = useLocation(),
    [data, setData] = useState(location.state),
    name = data.fName,
    areasOfPractice = languages[0].dict.AREAS_PRACTICE,
    company = `'${data.businessNm}'?`,
    dataTest = [],
    categories1 = projects.categories.map((i) => {
      dataTest.push({ key: i.name + "A", title: i.name, isActive: false })
    })

  useEffect(() => {
    header.setIsTitle(false)
    setInfo(dataTest)
    header.setIsHeaderSet(false)
    if (!newUser) {
      header.setIsArrow(false)
    }
  }, [])

  function goToNextPage() {
    console.log(data);

    if (newUser) {
      // fake link
      navigate('/home/projects', { state: data })

    } else {
      // fake link
      navigate('/setting', { state: data })
    }
  }
  const handleClick = (name) => {
    const result = info.map(elem => elem.title === name ? ({ ...elem, isActive: !elem.isActive }) : elem)
    setInfo(result)
    setData({ ...data, theCategories: info })
    console.log(data);

  }

  useEffect(() => {
    console.log(data);

  }, [handleClick])



  return (<>
    <div className={styles.title}><UserTitle text1={name + ', ' + areasOfPractice + ' ' + company} /></div>
    {info?.map(elem => <div className={styles.buttons} key={elem.title + "abc"}><BtnCheckBox name={elem.title} id={elem.title} key={elem.title} handleClick={handleClick} isActive={elem.isActive} /></div>)}
    {/* במידה וזה משתמש חדש צריך למשוך לו את הקטגוריות הדיפולטיביות מהדאטא בייס. אם זה משתמש קיים אז למשוך לו מהפרטי יוזר */}
    {/* //  {newUser? console.log("dd"):
  {/* //   // {data?.map(elem => <BtnCheckBox name={elem.title} id={elem.title} key={elem.title} handleClick={handleClick} isActive={elem.isActive} />}} */}

    <div className={styles.checkbuttons}> <BtnSubmitIcon color='orange' icon={newUser ? 'Arrow.svg' : 'v to text.svg'} func={goToNextPage} /></div>

  </>)
}
