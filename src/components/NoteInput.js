import React from 'react';

const noteInput = (props) => {
  return (
    <input  type='text' onChange={(event) => props.changeNote(event, props.id)} value={props.relatedNote}/>
  )
}

export default noteInput