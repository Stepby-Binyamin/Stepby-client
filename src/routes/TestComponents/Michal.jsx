
import React from 'react';
import AllAction from '../../components/all/AllAction';
import Confirm from '../../components/all/Confirm';
import AdditionNew from '../../components/all/MoreProject';
import MoreProject from '../../components/all/MoreProject';
import VerifyProblem from '../../components/all/VerifyProblem';
import MoreMenuTemplate from '../../components/all/MoreMenuTemplate';
import MoreMenuStep from '../../components/all/MoreMenuStep';
import Keyboard from '../../components/all/Keyboard'
import SubKeyboard from '../../components/all/SubKeyboard';
import BtnConfirm from '../../components/common/BtnConfirm';
import BtnSubmitIcon from '../../components/common/BtnSubmitIcon'
import BtnSubmitText from '../../components/common/BtnSubmitText';
import CreateClient from '../../components/all/CreateClient';
import CreateTemplate from '../../components/all/CreateTemplate'
import CreateTemplateGeneral from '../../components/all/CreateTemplateGeneral';
import CreateProject from '../../components/all/CreateProject'
import { useEffect } from 'react';
import { useContext } from 'react';
import mainContext from '../../context/mainContext';
import MoreTemp from '../../components/all/MoreTemp'
import MoreStep from '../../components/all/MoreStep';
export default function Michal() {
   const { header, drawer } = useContext(mainContext)
   useEffect(() => {
      drawer.setDrawer(true)
      drawer.setDrawerContent(<CreateClient />)

   }, [])
   return (
      <>
         {/* <div><CreateTemplateGeneral /></div> */}

      </>
   )
}
