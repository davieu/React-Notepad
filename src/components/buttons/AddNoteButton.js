import React from 'react'
//icon components
import { TiDocumentAdd } from 'react-icons/ti';
import { MdAdd } from "react-icons/md";


const addNoteButton = (props) => {
  return (
    <button className="sidebar-heading btn btn-primary" onClick={props.clickAddNote}>
      <TiDocumentAdd/>
    </button>
  )
}

export default addNoteButton