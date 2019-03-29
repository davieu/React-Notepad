import React, { Component } from 'react';
import './App.css';
import Note from '../components/Notes/Note/note';
import NotesList from '../components/Notes/NotesList';

let moment = require('moment');
let uniqid = require('uniqid');


class App extends Component {
  state = {
    notes: [{id: uniqid(), note: 'test1 asfdf dfg dfg sdg', dateCreated: moment().format('L')}, {id: uniqid(), note: 'test2 af afgerg erg asdd', dateCreated: moment().format('L')}],
    noteListShowing: true,
    currentNote: '',
    currentlySelectedIndex: 0
  };

  //toggle for hiding and showing the notes list.
  isNoteListShowing = () => {
    const isShowing = this.state.noteListShowing;
    this.setState({
      noteListShowing: !isShowing
    });
  };

  //creates a new note on the list
  addNewNote = () => {
    const copyNotes = [...this.state.notes];
    let newNote = {
      id: uniqid(),
      note: '',
      dateCreated: moment().format('L')
    };

    this.setState({
      notes: [...copyNotes, newNote]
    });
  };

  //helper function for finding the selected note id/index
  selectedNoteID__Helper = (noteID) => {
    let indexSelected = this.state.notes.findIndex(note => {
      return note.id === noteID;
    })
    return indexSelected;
  };

  // selectNoteForInput = (event, noteID) => {
  //   let noteIndex = this.selectedNoteID__Helper(noteID);
  //   const copyNote = {
  //     ...this.state.notes[noteIndex]
  //   };

  //   copyNote.note = event.target.value;

  //   const copyNotes = [...this.state.notes];
  //   copyNotes[noteIndex] = copyNote;

  //   this.setState({ notes: copyNotes })
  //   console.log(noteIndex)
  // };

  selectNoteForInput = (noteID) => {
    let noteIndex = this.selectedNoteID__Helper(noteID);
    this.setState({
      currentlySelectedIndex: noteIndex
    })
    console.log(noteIndex)
  };

  deleteNoteFromList = (noteID) => {
    const copyNotes = [...this.state.notes];
    let noteIndex = this.selectedNoteID__Helper(noteID);

    copyNotes.splice(noteIndex, 1);
    
    this.setState({
      notes: copyNotes
    });
  };

  render() {
    let noteList = null;

    //toggle for showing the notes
    if (this.state.noteListShowing) {
      noteList = <NotesList 
        selectNote={this.selectNoteForInput}
        notes={this.state.notes}
        clickDelete={this.deleteNoteFromList}/>;
    };

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
        {/* <input type="text" className="note-text" onChange={this.selectNoteForInput} value={this.state.currentNote}/> */}
        <input type="text" className="note-text" value={this.state.notes[this.state.currentlySelectedIndex].note}/>
        {noteList}
      </div>
    );
  }
}

export default App;
