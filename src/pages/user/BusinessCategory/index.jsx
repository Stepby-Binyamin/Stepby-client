import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BtnCheckBox from '../../../components/common/BtnCheckBox'
import BtnSubmitIcon from '../../../components/common/BtnSubmitIcon'
import UserTitle from '../../../components/common/UserTitle'
import mainContext from '../../../context/mainContext'
import projects from '../../../data/fakeProjects'
export default function BusinessCategory() {
  const { header } = useContext(mainContext)
  const newUser = true,
  [info,setInfo]=useState(),
    navigate = useNavigate(),
    location = useLocation(),
    [data, setData] = useState(location.state)
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
    console.log(info);
  }, [])

  function goToNextPage() {
    console.log("blahblah BusinessCategory");
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
    console.log(info);
    setData({...data,theCategories:info})
console.log(data);
  }

  useEffect(() => {
    console.log(info);
  }, [handleClick])



  return (<>
    <UserTitle text={"cmon man"} />
    {info?.map(elem => <BtnCheckBox name={elem.title} id={elem.title} key={elem.title} handleClick={handleClick} isActive={elem.isActive} />)}
    {/* //  {newUser? console.log("dd"):
   
  {/* //   // {data?.map(elem => <BtnCheckBox name={elem.title} id={elem.title} key={elem.title} handleClick={handleClick} isActive={elem.isActive} />}} */}

    <BtnSubmitIcon color='orange' icon='Arrow.svg' func={goToNextPage} />

  </>)
}
