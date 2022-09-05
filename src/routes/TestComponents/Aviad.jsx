import React from 'react'
import { useContext } from 'react'
import MoreMenuStep from '../../components/all/MoreMenuStep';
import HeaderTitle from '../../components/common/HeaderTitle'
import mainContext from '../../context/mainContext'

export default function Aviad() {
   
   const {header,drawer} = useContext(mainContext);
   return (
      <>
      <HeaderTitle isArrow={true} 
      title="בדיקה כותרת ראשית" subTitle="כותרת משנית" 
      drawerFunc={()=>drawer.setDrawer(<MoreMenuStep/>)}/>
      </>
      )
}
