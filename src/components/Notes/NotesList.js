import React from 'react';

const notesList = (props) => props.notes.map((note) => {

  const style={margin:'0'}
  return ( 
        <button 
          key={note.id} 
          onClick={() => props.changed(note.id)} 
          id={note.id}
          className={`noteItem target-item list-group-item list-group-item-action ${note.id}`}>
          {props.shorten(note.note)} <p style={style}>{note.dateCreated}</p>
        </button>
  )
})


export default notesList;
