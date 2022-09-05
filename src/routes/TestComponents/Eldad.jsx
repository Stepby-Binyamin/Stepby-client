import React from "react";
import { useContext } from "react";
import Efrat from "./Efrat";
import {PopupContext} from "../../context"
// import RadioBtn from "../../components/all/radioBtn/withoutIcon";
// import RadioBtnWithIcon from "../../components/all/radioBtn/WithIcon";

export default function Eldad() {

  return (
     <>
      {/* <RadioBtn arr={['לקוח מסוים',"שתיים"]} />
      <RadioBtnWithIcon obj={[{name: 'שלי', icon: 'image'},{name: 'הלקוח', icon: 'pdf'}]} /> */}

      <div>
         <button onClick={setpopUpComp(<Efrat/>)} >cccccccccc</button>
      </div>
    </>
  );
}