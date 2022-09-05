import React from 'react'
import Icon24 from '../../components/common/BtnHolder/BtnHolder'
import Input from '../../components/common/Input/Input'



export default function Bezalel() {
   return (

      // <div><Icon24 onChange={"onChange()"} src={'../../../../public/images/icons/Icon24.png'} /></div>
      <div><Input name={"name"} placeholder={"שם החברה"} onChange={"onChange()"}type={"text"}/></div>
   )
}
