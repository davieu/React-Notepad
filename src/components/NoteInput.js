import React from 'react';

const noteInput = (props) => {
  return (

    <textarea className={'noteInput'} placeholder={'Your notes...'} type='text' onChange={(event) => props.changeNote(event, props.id)} value={props.relatedNote}/>
  )
}

export default noteInput