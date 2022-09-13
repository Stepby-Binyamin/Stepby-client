import React, { useEffect } from 'react';
import styles from "./style.module.css"
import axios from "axios"


const Language = ({ style = {}, ...props }) => {

   const lang = 0

   useEffect(() => {

      if (!localStorage.language)
         axios.get('http://localhost:5000/language/' + lang)
            .then(response => {
               console.log(response.data.dict);
               localStorage.language = JSON.stringify(response.data.dict)
            })
            .catch(error => {
               console.log(error)
            });

   }, [])

   return (
      <div className={styles.Language} style={style} {...props} >

      </div>
   )
}

export default Language