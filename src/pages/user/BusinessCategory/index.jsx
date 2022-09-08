import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BtnCheckBox from '../../../components/common/BtnCheckBox'
import BtnSubmitIcon from '../../../components/common/BtnSubmitIcon'
import UserTitle from '../../../components/common/UserTitle'
import mainContext from '../../../context/mainContext'
import projects from '../../../data/fakeProjects'
import { languages } from '../../../functions/languages'
import styles from './style.module.css'
export default function BusinessCategory({ newUser=true}) {
  const { header } = useContext(mainContext)
  const [info, setInfo] = useState(),
    navigate = useNavigate(),
    location = useLocation(),
    [data, setData] = useState(location.state),
    name = data.fName,
    areasOfPractice = languages[0].dict.AREAS_PRACTICE,
    company = `'${data.businessNm}?'`
  let catArr = [],
    categories1 = projects.categories.map((i) => {
      catArr.push({ title: i.name })
    })

  const dataTest = []
  catArr.map((i) => {
    dataTest.push({ title: i.title, isActive: false })
  })

  useEffect(() => {
    header.setIsTitle(false)
    setInfo(dataTest)
  }, [])

  function goToNextPage() {
    console.log(data);

    if (newUser) {
      // fake link
      navigate('/projects',)

    } else {
      // fake link

      navigate('/settings')
    }
  }
  const handleClick = (name) => {
    const result = info.map(elem => elem.title === name ? ({ ...elem, isActive: !elem.isActive }) : elem)
    setInfo(result)
    setData({ ...data, theCategories: info })

  }

  // useEffect(() => {
  //   console.log(info);
  // }, [handleClick])



  return (<>
    <div className={styles.title}><UserTitle text={name + ' ' + areasOfPractice + ' ' + company} /></div>
    {info?.map(elem => <div className={styles.buttons}><BtnCheckBox name={elem.title} id={elem.title} key={elem.title} handleClick={handleClick} isActive={elem.isActive} /></div>)}
    {/* //  {newUser? console.log("dd"):
   
  {/* //   // {data?.map(elem => <BtnCheckBox name={elem.title} id={elem.title} key={elem.title} handleClick={handleClick} isActive={elem.isActive} />}} */}

    <div className={styles.checkbuttons}> <BtnSubmitIcon color='orange' icon={newUser ? 'Arrow.svg' : 'v to text.svg'} func={goToNextPage} /></div>

  </>)
}
