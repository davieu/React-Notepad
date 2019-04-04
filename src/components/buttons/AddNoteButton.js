import React from 'react'
import { MdNoteAdd, MdReorder, MdRemove, MdDeleteForever } from 'react-icons/md';
import { TiDocumentAdd } from 'react-icons/ti';

const addNoteButton = (props) => {
  return (
    <button onClick={props.clickAddNote}>
      <TiDocumentAdd/>
    </button>
  )
}

export default addNoteButton