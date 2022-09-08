import React, { useEffect } from "react";
import { useState } from "react";
// import RadioBtn from "../../components/all/radioBtn/withoutIcon";
// import RadioBtnWithIcon from "../../components/all/radioBtn/WithIcon";
// import BtnSubmitText from "../../components/common/BtnSubmitText";
import { useContext } from "react";
import mainContext from "../../context/mainContext";
import CreateTemplateGeneral from "../../components/all/CreateTemplateGeneral";
import CreateProject from "../../components/all/CreateProject";
import CreateClient from "../../components/all/CreateClient"
import AllAction from "../../components/all/AllAction"

export default function Eldad() {
  const [data, setdata] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  const { drawer } = useContext(mainContext);

  useEffect(() => {
    drawer.setDrawerContent(<AllAction 
      newTempFunc={e=> {drawer.setDrawerContent(<CreateTemplateGeneral/>)}} 
      newUserFunc={e=> {drawer.setDrawerContent(<CreateClient/>)}} 
      projectToUserFunc={e=> {drawer.setDrawerContent(<CreateProject/>)}}/>);
    drawer.setDrawer(true);
  }, []);
  function allActionsClick() {
   drawer.setDrawerContent(<AllAction 
       newTempFunc={e=> {drawer.setDrawerContent(<CreateTemplateGeneral/>)}} 
       newUserFunc={e=> {drawer.setDrawerContent(<CreateClient/>)}} 
       projectToUserFunc={e=> {drawer.setDrawerContent(<CreateProject/>)}}/>);
     drawer.setDrawer(true)
}
  return (
    <>
      <button onClick={()=>drawer.setDrawer(true)}>sakjdhkjsadhkjs</button>
    </>
  );
}
