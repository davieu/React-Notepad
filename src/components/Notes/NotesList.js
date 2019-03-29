import React from 'react';

const notesList = (props) => props.notes.map((note) => {
  return (
    <div key={note.id}>
      {/* <button onClick={(event) => props.selectNote(note.id, event)}>{note.id} {note.dateCreated} {note.note} </button> */}
      <button onClick={() => props.selectNote(note.id)}>{note.id} {note.dateCreated} {note.note} </button>
      <button onClick={() => props.clickDelete(note.id)}>X</button>
    </div>
  )
})

export default notesList;