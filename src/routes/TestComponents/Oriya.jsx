import React from 'react'
import { useState } from 'react'
import InputVerification from '../../components/all/InputVerification'
import NavLink from '../../components/common/NavLink'
import NavLinkTab from '../../components/common/NavLinkTab'

export default function Oriya() {
   const [state, setState] = useState()
   return (
      <>
      {/* <NavLink/>
      <NavLinkTab state={state} setState={setState} firstText = 'הכל' secondText = 'בטיפול שלי' thirdText = 'ממתין ללקוח'/>
      <NavLinkTab state={state} setState={setState} counter={2} firstText = 'התבניות שלי' secondText =  'הממולצים שלנו'/> */}
      <InputVerification/>
      </>
   )
}
