import React from 'react';
//icon components
import { MdDeleteForever } from 'react-icons/md';


const deleteButton = (props) => {
  return (
    <button onClick={props.clickDelete}>
      <MdDeleteForever/>
    </button>
  )
}

export default deleteButton;
