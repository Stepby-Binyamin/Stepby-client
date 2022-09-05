import React from 'react'
import StatusCompleted from '../../components/all/StatusCompleted/StatusCompleted'
import StatusStep from '../../components/all/StatusStep/StatusStep'
import StatusTemp from '../../components/all/StatusTemp/statusBarTemplateEdit/StatusTemp'

export default function Yehoshua({name,num,...props}) {
   return (<>
      <div>Yehoshua</div>
      <StatusStep numOfStage="5" user="לעמרם" time="7W"    />
<br>
</br>
      <StatusStep numOfStage="5" user="לך"/>
      <br></br>
      <StatusTemp/>
      <br></br>
      <StatusCompleted/>
   </>
   )
}


