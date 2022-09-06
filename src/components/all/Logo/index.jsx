import React from 'react'



// logo option-->stepbyOrange,stepby


const Logo = ({ logo, style = {}, ...props }) => {

   return (
      <div style={style} {...props} >
         <img src={logo + ".svg"} />
         {/* "./images/stepbyOrange.svg" */}
      </div>
   )
}

export default Logo