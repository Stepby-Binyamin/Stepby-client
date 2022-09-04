import React from 'react'

const Logo = ({ style = {}, ...props }) => {

   return (
      <div style={style} {...props} >
         <img src="./images/stepbyOrange.svg" />
      </div>
   )
}

export default Logo