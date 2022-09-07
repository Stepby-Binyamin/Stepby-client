import React from 'react'
import AllAction from '../../components/all/AllAction'

export default function PlusButton() {
    function allActionsClick() {
        drawer.setDrawerContent(<AllAction 
            newTempFunc={e=> {drawer.setDrawerContent(<CreateTemplateGeneral/>)}} 
            newUserFunc={e=> {drawer.setDrawerContent(<CreateClient/>)}} 
            projectToUserFunc={e=> {drawer.setDrawerContent(<CreateProject/>)}}/>);
          drawer.setDrawer(true)
    }
  return (
    <div onClick={allActionsClick}><img src="/images/icon-btns/+.svg" alt="" /></div>
  )
}
