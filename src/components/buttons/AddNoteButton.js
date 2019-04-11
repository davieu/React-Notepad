import React from 'react'
//icon components
import { TiDocumentAdd } from 'react-icons/ti';

const addNoteButton = (props) => {
  return (
    <a href={`#${props.notes[props.currentlySelected].id}`} className="sidebar-heading btn btn-primary" onClick={props.clickAddNote}>
      <TiDocumentAdd/>
    </a>
  )
}

export default addNoteButton