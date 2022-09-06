import React from 'react'
import CreateProject from '../../components/all/CreateProject'
import UserOnly from '../../components/all/UserOnly'
import BtnIcon from '../../components/common/BtnIcon'


export default function Yossef() {
   return (
      <div>
         {/* <BtnIcon icon='/images/icons/image.svg' isSoon ={true} textColor = "#EF0E0E" text ="פרויקט חדש ללקוח קיים"/> */}
         {/* <CreateProject/> */}
         <UserOnly/>
      </div>
   )
}
