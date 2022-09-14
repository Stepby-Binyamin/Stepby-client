
import apiCalls from "./apiRequest";

export default function languageFunc(){

    const lang = 0 // Hebrew language code = 0
  
        apiCalls("get","/language/"+lang)
                .then(response => {
                   localStorage.setItem("language", JSON.stringify(response.dict))
                })
                .catch(error => {
                   console.log(error)
                });
    
}