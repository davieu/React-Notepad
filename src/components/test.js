import React from 'react'
import  { TiDelete }  from 'react-icons/ti'
import { IconContext } from "react-icons";

const icons = () => {
  return (
    <div>
        <IconContext.Provider value={{ size:'50px', color: "blue", className: "global-class-name" }}>
  <div>
  <TiDelete/>
  </div>
</IconContext.Provider>

    </div>
  )
}

export default icons

 
