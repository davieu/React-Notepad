import React from 'react';
// import NotesField from '../notesField'

const notesList = (props) => props.notes.map((note) => {
  
  return ( 
    <div key={note.id}>
      <button  onClick={() => props.changed(note.id)}>{note.id} {note.note} {note.dateCreated} {props.currentlySelected} </button>

      {note.id == props.notes[props.currentlySelected].id ? <button onClick={() => props.clickDelete(note.id)}>X</button> : ''}
      
      {note.id == props.notes[props.currentlySelected].id ? <input  type='text' onChange={(event) => props.changeNote(event, note.id)} value={note.note}/> : ''}
    </div>
  )
})


export default notesList;