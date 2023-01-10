import React from 'react'

// logo option-->stepbyOrange,stepby
const Logo = ({ logo, style = {}, ...props }) => {

   return (
      <div style={style} {...props} >
         <img src={`${logo}.svg`} alt="" />
         {/* "./images/stepbyOrange.svg" */}
      </div>
   )
}
export default Logo