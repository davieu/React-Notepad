import React from 'react';

const notesField = (props) => {
  return (
    <div>
      <input onChange={props.changed} type='text' value={props.notes[props.selected].note}/>
    </div>
  )
}

export default notesField; 