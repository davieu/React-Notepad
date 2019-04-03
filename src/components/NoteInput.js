import React from 'react';
import TextField from '@material-ui/core/TextField';
import { MdNoteAdd } from 'react-icons/md';

const noteInput = (props) => {
  const style = {
    backgroundColor:'lightgrey'
  }

  const icon = <MdNoteAdd /> 
  const newicon = 'icon' + icon

  return (
    <TextField className={'noteInput'} label={icon} margin={'dense'} fullWidth={true} placeholder={'Your notes...'} multiline={true} type='text' className={'noteInput'} onChange={(event) => props.changeNote(event, props.id)} value={props.relatedNote}/>
  )
}

export default noteInput