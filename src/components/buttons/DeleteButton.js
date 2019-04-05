import React from 'react';
//icon components
import { MdDeleteForever } from 'react-icons/md';
import { FaTrash } from "react-icons/fa";


const deleteButton = (props) => {
  return (
    <button className={'btn btn-primary'}onClick={props.clickDelete}>
      <FaTrash/>
    </button>
  )
}

export default deleteButton;
