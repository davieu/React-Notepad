import React from 'react'
//icon components
import { TiDocumentAdd } from 'react-icons/ti';

const addNoteButton = (props) => {
  return (
    <button onClick={props.clickAddNote}>
      <TiDocumentAdd/>
    </button>
  )
}

export default addNoteButton