import React from "react";
// import MainDrawer from "../../drawer/MainDrawer";
// import Efrat from "./Efrat";
import RadioBtn from "../../components/all/radioBtn/withoutIcon";
import RadioBtnWithIcon from "../../components/all/radioBtn/WithIcon";

export default function Eldad() {

  return (
     <>
      <RadioBtn arr={['לקוח מסוים',"שתיים"]} />
      <RadioBtnWithIcon obj={[{name: 'שלי', icon: 'image'},{name: 'הלקוח', icon: 'pdf'}]} />

      {/* <div>
        <MainDrawer Component={<Efrat />} />
      </div> */}
    </>
  );
}