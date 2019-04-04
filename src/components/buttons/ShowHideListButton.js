import React from 'react';
//icon Components
import { MdReorder, MdRemove } from 'react-icons/md';

const showHideListButton = (props) => {
  return (
    <button className="buttons" onClick={props.clickShowHideList} >
      {props.showing ? <MdRemove/> : <MdReorder/>}
    </button>
  )
}

export default showHideListButton;