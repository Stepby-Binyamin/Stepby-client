import React from "react";
import MainDrawer from "../../drawer/MainDrawer";
import Efrat from "./Efrat";

export default function Eldad() {

  return (
     <>
      <div>
        <MainDrawer Component={<Efrat />} />
      </div>
    </>
  );
}