import React from 'react'
import CreateProject from '../../components/all/CreateProject'
import UserOnly from '../../components/all/UserOnly'
import BtnIcon from '../../components/common/BtnIcon'
import MoreProject from '../../components/all/MoreProject'
import CreateTemplateGeneral from '../../components/all/CreateTemplateGeneral'
import LinkWhatsapp from '../../components/common/LinkWhatsapp'
import BtnSubmitIcon from '../../components/common/BtnSubmitIcon'
import BtnsBox from '../../components/common/BtnsBox'
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import mainContext from '../../context/mainContext'
import StepBasics from '../../components/all/StepBasics'
import Project from '../../pages/common/Project'
const style = { height: "52px", width: "52px", background: "gray", size: "26px", borderRadius: "12px", fontSize: "35px" };

export default function Yossef() {

   // const [click, setClick] = useState(false);

   // const { header, drawer } = useContext(mainContext)
   // let navigate = useNavigate();



   // const onClickHandler = (e) => {
   //    drawer.setDrawer(true)
   //    drawer.setDrawerContentHeader(<StepBasics />)
   // }

   return (
      <div>
         {/* <BtnIcon icon='/images/icons/image.svg' isSoon ={true} textColor = "#EF0E0E" text ="פרויקט חדש ללקוח קיים"/> */}
         {/* <CreateProject/> */}
         {/* <UserOnly/> */}
         {/* <StepBasics/> */}
         {/* <MoreProject/> */}
         {/* <UserOnly/> */}
         {/* <CreateTemplateGeneral/> */}
         {/* <LinkWhatsapp /> */}
         {/* <button onClick={onClickHandler} style={style}>+</button> */}
         <Project mode="biz" />

      </div>
   )
}
