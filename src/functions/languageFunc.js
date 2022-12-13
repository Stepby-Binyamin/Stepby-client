
import apiCalls from "./apiRequest";

const languageFunc=()=>{
   const lang = 0 // Hebrew language code = 0
   
   apiCalls("get","/language/"+lang)
      .then(response => {
            localStorage.setItem("language", JSON.stringify(response.dict))})
      .catch(error => {
            console.log(error)});
    
}
export default languageFunc