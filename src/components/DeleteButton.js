import React from 'react';
import  { TiDelete }  from 'react-icons/ti'

const deleteButton = (props) => {

  const style={
    color:'red',
    fontSize: '1.5em',
    display: 'inline'
}
  return (
    <span style={style} onClick={props.clickDelete}>
    {/* <IconContext.Provider value=({size:'50px'})> */}
    <TiDelete />
    </span>
  )
}

export default deleteButton;
