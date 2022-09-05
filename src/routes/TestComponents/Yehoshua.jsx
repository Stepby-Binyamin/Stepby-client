import React from 'react'
import StatusCompleted from '../../components/all/StatusCompleted'
import StatusStep from '../../components/all/StatusStep'
import StatusTemp from '../../components/all/StatusTemp'
import UserNumberVerification from '../../components/all/UserNumberVerification'

export default function Yehoshua({ name, num, ...props }) {
   return (<>
      <div>Yehoshua</div>
      <StatusStep numOfStage="5" user="לעמרם" time="7W" />
      <br></br>
      <StatusStep numOfStage="5" user="לך" />
      <br></br>
      <StatusTemp />
      <br></br>
      <StatusCompleted />
      <br></br>
      <UserNumberVerification phoneNum="0509876544"/>
   </>
   )
}


