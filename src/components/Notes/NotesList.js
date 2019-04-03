import React from 'react';
// import DeleteButton from '../DeleteButton';

const notesList = (props) => props.notes.map((note) => {
  

//   const style2={
//     color:'red',
//     fontSize: '1.5em',
//     display: 'inline'
// }
  return ( 
 

      <div className={'singleNoteList'} key={note.id} onClick={() => props.changed(note.id)}>
        <p>{props.shorten(note.note)}</p> <p>{note.dateCreated}</p>
      </div>


  )
})


export default notesList;

        {/* {note.id == props.notes[props.currentlySelected].id ? 
        <DeleteButton style={style2} clickDelete={() => props.clickDelete(note.id)}/> : ''} */}

  

        {/* {note.id == props.notes[props.currentlySelected].id ? <button onClick={() => props.clickDelete(note.id)}>X</button> : ''} */}

        {/* {note.id == props.notes[props.currentlySelected].id ? <NoteInput notes={props.notes} currentlySelected={props.currentlySelected} changeNote={(event) => props.changeNote(event, note.id)} relatedNote={note.note}/> : ''}  */}

        {/* {note.id == props.notes[props.currentlySelected].id ? <NoteInput notes={props.notes} currentlySelected={props.currentlySelected} changeNote={(event) => props.changeNote(event, note.id)} relatedNote={note.note}/> : ''}  */}

        {/* {note.id == props.notes[props.currentlySelected].id ? <input  type='text' onChange={(event) => props.changeNote(event, note.id)} value={note.note}/> : ''} */}