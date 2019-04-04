import React from 'react';
import { MdNoteAdd, MdReorder, MdRemove, MdDeleteForever } from 'react-icons/md';

const showHideListButton = (props) => {
  return (
    <button 
      onClick={props.clickShowHideList} 
      className="hide-list">
      {props.showing ? <MdRemove/> : <MdReorder/>}
    </button>
  )

}

export default showHideListButton;