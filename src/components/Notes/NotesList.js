import React from 'react';
import {convertToRaw} from 'draft-js';

// The list of notes template
const notesList = (props) => props.notes.map((note) => {

  // grabs the editor state object blocks
  let editorStateRaw = convertToRaw(note.editorState.getCurrentContent()).blocks
  // map the editor state object block array and checks if the text block is greater than 0 or if the block is escaped 'enter' key. if enter key it will return undefined
  let mapEditorStateBlocks = editorStateRaw.map(blockText => {
    if (blockText.text.length > 0) {
      return blockText.text
    }
      return blockText.text
  })

  // this is the title of the note that will display on the notelist. if empty it will simply display a '...'
  let titleForNote = ['...']
  // checks the mapped array and if it is not undefined than the first text block that isn't undefined and has text will be the title. it is pushed to the titleForNote array. also sets the length of the title with substring
  for (let i = 0; i < mapEditorStateBlocks.length; i++) {
    if (mapEditorStateBlocks[i] !== undefined) {
      titleForNote[0] = (`${mapEditorStateBlocks[i].trim().substring(0, 19)}...`)
      break;
    } 
  }

  const style={margin:'0'}

  return ( 
        <button 
          key={note.id} 
          onClick={() => props.changed(note.id)} 
          id={note.id}
          className={`noteItem target-item list-group-item list-group-item-action ${note.id}`}>
           {titleForNote} <p style={style}>{note.dateCreated}</p>Note ID:   {note.id}
        </button>        
  )
})


export default notesList;
