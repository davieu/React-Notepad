import React, { Component } from 'react';
import './App.css';
import Note from '../components/Notes/Note/note';
import NotesList from '../components/Notes/NotesList';
import NotesField from '../components/notesField'

let moment = require('moment');
let uniqid = require('uniqid');
var randomWords = require('random-words');


class App extends Component {
  state = {
    notes: [{id: uniqid(), note: `test1 ${randomWords({exactly: 4, join: ' '})}`, dateCreated: moment().format('L')}, {id: uniqid(), note: `test2 ${randomWords({exactly: 4, join: ' '})}`, dateCreated: moment().format('L')}],
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
      note: randomWords({exactly: 5, join: ' '}),
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
    console.log('selectedNoteID__Helper Index', indexSelected)
    console.log('selectedNoteID__Helper ID', noteID)
    return indexSelected;
  };

  // selectNoteForInput = (event, noteID) => {
  //   let noteIndex = this.selectedNoteID__Helper(noteID);
    // const copyNote = {
    //   ...this.state.notes[noteIndex]
    // };

    // copyNote.note = event.target.value;

    // const copyNotes = [...this.state.notes];
    // copyNotes[noteIndex] = copyNote;

    // this.setState({ notes: copyNotes })
    // console.log(noteIndex)
  // };

  selectNoteForInput = (noteID) => {
    let noteIndex = this.selectedNoteID__Helper(noteID);
    this.setState({
      currentlySelectedIndex: noteIndex
    })
//---------------------------------
    // const copyNote = {
    //   ...this.state.notes[noteIndex]
    // };

    // copyNote.note = event.target.value;

    // const copyNotes = [...this.state.notes];
    // copyNotes[noteIndex] = copyNote;

    // this.setState({ notes: copyNotes })
  };

  // selectNoteForInput = (noteID) => {
  //   let noteIndex = this.selectedNoteID__Helper(noteID);
  //   this.setState({
  //     currentlySelectedIndex: noteIndex
  //   })
    
  //   console.log(noteID)
  // };

  deleteNoteFromList = (noteID) => {
    console.log('length ', this.state.notes.length)

    const copyNotes = [...this.state.notes];
    let noteIndex = this.selectedNoteID__Helper(noteID);
    let notesLength = this.state.notes.length

    //if the first note is clicked and the length of notes is > 1
    //then delete the note and make the next note under it the first.
    if (noteIndex == 0 && notesLength > 1) {
      copyNotes.splice(noteIndex, 1);
      this.setState({ notes: copyNotes });
      this.setState({ currentlySelectedIndex: 0})

    //if it is the last remaining note then clear the note and apply new date created and id
    } else if (noteIndex == 0) {
      this.setState({ currentlySelectedIndex: 0})
      this.setState({
        id: uniqid(),
        note: 'newly deleted',
        dateCreated: moment().format('L')
      })
      this.setState({ currentlySelectedIndex: 0})
    
    //if it is not the first note then just delete note targeted and set the next targeted note as the one above.
    } else {
      copyNotes.splice(noteIndex, 1);
      this.setState({ notes: copyNotes });
      let nextUpAfterDelete = noteIndex - 1
      this.setState({ currentlySelectedIndex: nextUpAfterDelete})
    } 
  };

  render() {
    let noteList = null;

    //toggle for showing the notes
    if (this.state.noteListShowing) {
      noteList = <NotesList 
        changed={this.selectNoteForInput}
        notes={this.state.notes}
        clickDelete={this.deleteNoteFromList}
        currentlySelected={this.state.currentlySelectedIndex}/>;
    };

    console.log(this.state)

    return (
      <div className="App">
        <h1>testsss</h1>
        <div>
          <button onClick={this.addNewNote} className="add-Note">Add Note</button>
          <button onClick={this.isNoteListShowing} className="hide-list">{this.state.noteListShowing ? 'Hide' : 'Show'}</button>
        </div>
        <NotesField notes={this.state.notes} selected={this.state.currentlySelectedIndex} />
        {/* <input type="text" className="note-text" onChange={this.selectNoteForInput} value={this.state.currentNote}/> */}
        {/* <input type="text" className="note-text" value={this.state.notes[this.state.currentlySelectedIndex].note}/> */}
        {noteList}
      </div>
    );
  }
}

export default App;
