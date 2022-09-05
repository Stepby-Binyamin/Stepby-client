import React from "react";
import MainDrawer from "../../drawer/MainDrawer";
import Efrat from "./Efrat";

export default function Eldad() {
 const state = [
    {
      name: "sad",
      img: "",
    },
    {
      name: "smile",
      img: "",
    },
  ];
  return (
     <>
      {/* {state.map((data) => {
     console.log(this.state);
        console.log(data);
        
      return  <h3 key={data.name} style={data.name === "smile" ? "color: red" : "color: black"}>{data.nama}</h3>
      })} */}
      <div>
        <div>sadasd</div>
        <MainDrawer Component={<Efrat />} />
      </div>
    </>
  );
}
