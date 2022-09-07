import React from 'react'
import ListItem from '../../components/common/ListItem'
import HomeProject from '../../pages/home/HomeProject'

export default function Ariel() {
   return (
      <>
         {/* <ListItem
                              // key={}
                              status={"biz"}  // item.steps[0].status
                              mainTitle={"dsdsd"}
                              // secondaryTitle={item.name}
                              sconderyBoldTitle={"item.steps[0].name"}  //get current temp
                              time={"2d"}
                              link={`/project/`}  //path
                           /> */}
        <HomeProject />
      </>
   )
}
