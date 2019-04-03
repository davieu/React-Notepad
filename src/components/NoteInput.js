import React from 'react';
import TextField from '@material-ui/core/TextField';
import { MdNoteAdd } from 'react-icons/md';

const noteInput = (props) => {
  const styles = {
    textField: {
      fontSize: 50
    }
  }

  const icon = <MdNoteAdd /> 
  const newicon = 'icon' + icon

  return (

    <textarea className={'noteInput'} placeholder={'Your notes...'} type='text' onChange={(event) => props.changeNote(event, props.id)} value={props.relatedNote}/>

    // <TextField className={'noteInput'} inputStyle={styles.textField} rows={50}label={icon} margin={'none'} fullWidth={true} placeholder={'Your notes...'} multiline={true} type='text' onChange={(event) => props.changeNote(event, props.id)} value={props.relatedNote}/>
  )
}

export default noteInput