import React from 'react';

//test for cmapping
const notesList = (props) => props.notes.map((note) => {
  
  return (
    <div key={note.id}>
      {/* <button onClick={(event) => props.selectNote(note.id, event)}>{note.id} {note.dateCreated} {note.note} </button> */}
      {/* <button onClick={(event) => props.selectNote(event, note.id)}>{note.id} {note.dateCreated} {note.note} </button> */}
      <button  onClick={() => props.selectNote(note.id)}>{note.id} {note.dateCreated} {note.note} </button>

      {note.id == props.notes[props.currentlySelected].id ? <button onClick={() => props.clickDelete(note.id)}>X</button> : ''}
      
      <p>{note.note}</p>
    </div>
  )
})

export default notesList;