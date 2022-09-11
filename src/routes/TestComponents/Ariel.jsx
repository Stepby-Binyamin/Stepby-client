import React from 'react'
import AllAction from '../../components/all/AllAction'
import CreateProject from '../../components/all/CreateProject'
import StepEdit from '../../pages/template/StepEdit'
import ListItem from '../../components/common/ListItem'
import HomeProject from '../../pages/home/HomeProject'
import StepEditListItem from '../../components/common/StepEditListItem'

export default function Ariel() {
   return (
      <>
         {/* <ListItem

            status={"biz"}  // "biz" / client" / "done"
            mainTitle={"געגככענ"}
            secondaryTitle={'fddf'} // "done"  / small fontsize, light grey
            secondaryTitleWeight={''}  //next to secondaryTitle, small fontsize, light grey, weight 500
            sconderyBoldTitle={""}    //triangle-seperator ,time at end, small fontsize, light grey, weight 500 
            isFirstStep={""} //or true
            time={"4d"} // `${convertDate(item.lastApprove).time}${convertDate(item.lastApprove).type}`
            link={""}  //path
            up={""}   //change index function
            down={""} //change inpath
         /> */}
         {/* <HomeProject /> */}
         {/* <CreateTemplate /> */}
         {/* <StepEditListItem /> */}
         <StepEdit />
      </>
   )
}
