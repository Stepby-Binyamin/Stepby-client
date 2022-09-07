import React from 'react'
import BtnHolder from '../../components/common/BtnHolder/BtnHolder'

// import Input from '../../components/common/Input/Input'
// import Logo from '../../components/all/Logo'
// import Splash from '../../pages/Splash/splash'


export default function Bezalel() {
   let buttons = [

      { color: "gray", icon: "+", func: ()=>{console.log("Hello") }, link: '' },
      { color: "lite", icon: "whatsapp", func: '', link: "+972535277354" }
   ];



   return (
      <>

         <div><BtnHolder buttons={buttons} /></div>
         {/* <div><BtnHolder color={"gray"} icon={"3points"} /></div>
         <div><BtnHolder color={"lite"} icon={"wahtsapp"} /></div>
         <div><BtnHolder color={"lite"} icon={"1to2"} /></div>
         <div><BtnHolder color={"lite"} icon={"2to1"} /></div>
         <div><BtnHolder color={"orange"} icon={"V"} /></div>
         <div><BtnHolder color={"lite"} icon={"pencil"} /></div>
         <div><BtnHolder color={"gray"} icon={"triangle"} /></div> */}

         {/* <Logo logo={"./images/stepby.svg"}/> */}

         {/* <div><Input name={"name"} placeholder={"שם החברה"} onChange={"onChange()"}type={"text"}/></div> */}
         {/* <Splash/> */}
      </>
   )
}
