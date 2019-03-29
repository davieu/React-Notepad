import React, { Component } from 'react';
import './App.css';
import Note from '../components/Notes/Note/note';
import NotesList from '../components/Notes/NotesList';

let moment = require('moment');
let uniqid = require('uniqid');


class App extends Component {
  state = {
    notes: [{id: uniqid(), note: 'test1', created: moment().format('L')}, {id: uniqid(), note: 'test2', created: moment().format('L')}],
    noteListShowing: true
  }

  //toggle for hiding and showing the notes list.
  isNoteListShowing = () => {
    const isShowing = this.state.noteListShowing;
    this.setState({
      noteListShowing: !isShowing
    })
  }

  //creates a new note on the list
  addNewNote = () => {
    const copyNotes = [...this.state.notes]
    let newNote = {
      id: uniqid(),
      note: '',
      created: moment().format('L'),
    };

    this.setState({
      notes: [...copyNotes, newNote]
    })
  }

  selectedNoteID__Helper = (noteID) => {
    let indexSelected = this.state.notes.findIndex(note => {
      return note.id === noteID;
    })
    return indexSelected
  }

  selectNote = (noteID) => {
    let noteIndex = this.selectedNoteID__Helper(noteID)
  }

  deleteNoteFromList = (noteID) => {
    const copyNotes = [...this.state.notes]
    let noteIndex = this.selectedNoteID__Helper(noteID)

    copyNotes.splice(noteIndex, 1)
    this.setState({
      notes: copyNotes
    })
  }

  render() {
    let noteList = null;

    //toggle for showing the notes
    if (this.state.noteListShowing) {
      noteList = <NotesList 
        selectNote={this.selectNote}
        notes={this.state.notes}
        clickDelete={this.deleteNoteFromList}/>
    }

    // let notes = this.state.notes.map(el => {
    //   return <button key={el.id}>{el.note}  {el.created} {el.id}</button>
    // })
    console.log(this.state)
    console.log(this.state.notes)

    return (
      <div className="App">
        <h1>testsss</h1>
        <div>
          <button onClick={this.addNewNote} className="add-Note">Add Note</button>
          <button onClick={this.isNoteListShowing} className="hide-list">{this.state.noteListShowing ? 'Hide' : 'Show'}</button>
        </div>
        <input type="text" className="note-text" />
        {noteList}
      </div>
    );
  }
}

export default App;
