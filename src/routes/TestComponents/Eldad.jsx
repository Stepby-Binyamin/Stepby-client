import React from "react";
import { useContext } from "react";
import mainContext from "../../context/mainContext";
import CreateTemplateGeneral from "../../components/all/CreateTemplateGeneral";
import CreateProject from "../../components/all/CreateProject";
import CreateClient from "../../components/all/CreateClient"
import AllAction from "../../components/all/AllAction"
import Login from "../../pages/user/LoginPage"
import RadioBtn from "../../components/all/radioBtn/withoutIcon";

export default function Eldad() {

  const { drawer } = useContext(mainContext);

  function allActionsClick() {
    drawer.setDrawerContentHeader(<AllAction
      newTempFunc={e => { drawer.setDrawerContentHeader(<CreateTemplateGeneral />) }}
      newUserFunc={e => { drawer.setDrawerContentHeader(<CreateClient />) }}
      projectToUserFunc={e => { drawer.setDrawerContentHeader(<CreateProject />) }} />)
      // drawer.setDrawer(false);
  }

  return (
    <>
      {/* <Login/> */}
      <RadioBtn arr={['חופשי', 'לא חופשי' ]} changeFunc={(e)=> console.log(e.target.value)}/>
    </>
  );
}
