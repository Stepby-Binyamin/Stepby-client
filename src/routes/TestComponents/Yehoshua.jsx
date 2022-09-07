import React from 'react'
import StatusStep from '../../components/all/StatusStep'
import SignUpInfo from '../../components/all/SignUpInfo'
import InputVerification from '../../components/all/InputVerification'
import BusinessCategory from '../../pages/user/BusinessCategory'
// import StatusCompleted from '../../components/all/StatusCompleted'
// import StatusTemp from '../../components/all/StatusTemp'
// import UserNumberVerification from '../../components/all/UserNumberVerification'
// import SomethingWentWrong from '../../components/all/somethingWentWrong'


export default function Yehoshua({ name, num, ...props }) {
   return (<>
      <div>Yehoshua</div>
      {/* <InputVerification />
      <SignUpInfo/>
     <StatusStep numOfStage={"3"} time={97}  user={"לשאול"}/> */}
      <BusinessCategory />
   </>
   )
}


