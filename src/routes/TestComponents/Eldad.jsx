import React from "react";
import { useState } from "react";
import RadioBtn from "../../components/all/radioBtn/withoutIcon";
import RadioBtnWithIcon from "../../components/all/radioBtn/WithIcon";
import BtnSubmitText from "../../components/common/BtnSubmitText";

export default function Eldad() {

   const [data , setdata] = useState({})


   const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setdata(values => ({...values, [name]: value}))         
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(data);
    }

  return (
     <>
     <RadioBtnWithIcon obj={[{name: 'bla', icon: 'triangle'},{name: 'dat', icon: 'circle'}]}/>
      <div>
         <form  onSubmit={(e)=>{handleSubmit(e)}}>
            <RadioBtn arr={['כללי', 'לא כללי']} changeFunc={(e)=>handleChange(e)}/>
            <input type="text" name='inputText' value={data.inputText || ''} onChange={(e)=>handleChange(e)} /> 
            <BtnSubmitText icon='plus.svg' text='submit' color='gray' />
         </form>
      </div>
    </>
  );
}
