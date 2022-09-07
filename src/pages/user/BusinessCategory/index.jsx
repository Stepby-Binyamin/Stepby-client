import React from 'react'
import BtnCheckBox from '../../../components/common/BtnCheckBox'
import projects from '../../../data/fakeProjects'
export default function BusinessCategory() {

//  let categories1= projects.categories.map((i)=>{
// categories1.push(i)
//  })
//  console.log(categories1);

  let flag=false
  function onOff(){
    flag=!flag
  }
  return (<>
    <div>BusinessCategory</div>
    <BtnCheckBox isActive={flag} handleClick={onOff}/>
    <BtnCheckBox isActive={flag} handleClick={onOff}/>
    <BtnCheckBox isActive={flag} handleClick={onOff}/>
    <BtnCheckBox isActive={flag} handleClick={onOff}/>
    <BtnCheckBox isActive={flag} handleClick={onOff}/>
  </>
  )
}
