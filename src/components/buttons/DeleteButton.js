import React from 'react';
import  { TiDelete }  from 'react-icons/ti'
import { MdNoteAdd, MdReorder, MdRemove, MdDeleteForever } from 'react-icons/md';


const deleteButton = (props) => {
  return (
    <button onClick={props.clickDelete}>
      <MdDeleteForever/>
    </button>
  )
}

export default deleteButton;
