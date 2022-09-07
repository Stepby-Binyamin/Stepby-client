import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BtnCheckBox from '../../../components/common/BtnCheckBox'
import BtnSubmitIcon from '../../../components/common/BtnSubmitIcon'
import projects from '../../../data/fakeProjects'
export default function BusinessCategory() {
  const [data, setData] = useState(),
    newUser = true,
    navigate = useNavigate();
  let catArr = [],
    categories1 = projects.categories.map((i) => {
      catArr.push({ title: i.name })
    })

  const dataTest = []
  catArr.map((i) => {
    dataTest.push({ title: i.title, isActive: false })
  })

  useEffect(() => {
    setData(dataTest)
  }, [])

  function goToNextPage() {
    console.log("blahblah BusinessCategory");
    if(newUser){
      // fake link
      navigate('/projects')

    }else{
      // fake link

      navigate('/settings')
    }
  }
  const handleClick = (name) => {
    const result = data.map(elem => elem.title === name ? ({ ...elem, isActive: !elem.isActive }) : elem)
    setData(result)
    console.log(data);
  }

  useEffect(() => {
    console.log(data);
  }, [handleClick])



  return (<>

    {data?.map(elem => <BtnCheckBox name={elem.title} id={elem.title} key={elem.title} handleClick={handleClick} isActive={elem.isActive} />)}
    {/* //  {newUser? console.log("dd"):
   
  {/* //   // {data?.map(elem => <BtnCheckBox name={elem.title} id={elem.title} key={elem.title} handleClick={handleClick} isActive={elem.isActive} />}} */}

    <BtnSubmitIcon color='orange' icon='Arrow.svg' func={goToNextPage} />

  </>)
}
