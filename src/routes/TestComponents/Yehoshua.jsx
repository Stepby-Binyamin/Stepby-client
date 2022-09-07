import React from 'react'
import StatusCompleted from '../../components/all/StatusCompleted'
import StatusStep from '../../components/all/StatusStep'
import StatusTemp from '../../components/all/StatusTemp'
import UserNumberVerification from '../../components/all/UserNumberVerification'
import SomethingWentWrong from '../../components/all/somethingWentWrong'
import SignUpInfo from '../../components/all/SignUpInfo'
import InputVerification from '../../components/all/InputVerification'


export default function Yehoshua({ name, num, ...props }) {
   return (<>
      <div>Yehoshua</div>
      <InputVerification />
      <SignUpInfo/>
     <StatusStep numOfStage={"3"} time={14}  user={"solly"}/>
   </>
   )
}


