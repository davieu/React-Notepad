import React from 'react';
//icon components
import { FaTrash } from "react-icons/fa";


const deleteButton = (props) => {
  return (
    <a href={`#${props.notes[props.currentlySelected].id}`} className={'btn btn-primary'}onClick={props.clickDelete}>
      <FaTrash/>
    </a>
  )
}

export default deleteButton;
