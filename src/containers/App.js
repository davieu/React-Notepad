import React, { Component } from 'react';
import './App.css';
import NotesList from '../components/Notes/NotesList';
import NoteInput from '../components/NoteInput';
import Test from '../components/test';
import { MdNoteAdd, MdReorder, MdRemove, MdDeleteForever } from 'react-icons/md';
import { TiDocumentAdd } from 'react-icons/ti';
import { FaAngleDoubleUp, FaAngleDoubleDown, FaThList} from 'react-icons/fa';
import DeleteButton from '../components/buttons/DeleteButton';
import NavbarNote from '../components/Navbar'

import {Container, Row, Col, Navbar }from 'react-bootstrap';

let moment = require('moment');
let uniqid = require('uniqid');
let randomWords = require('random-words');


class App extends Component {
  state = {
    notes: [
      {id: uniqid(), note: '', dateCreated: moment().format('L')}
    ],
    noteListShowing: true,
    currentNote: '',
    currentlySelectedIndex: 0,
  };

  //toggle for hiding and showing the notes list.
  isNoteListShowing = () => {
    const isShowing = this.state.noteListShowing;
    this.setState({
      noteListShowing: !isShowing
    });
  };

  shortenNoteListTitle = (shorten) => {

    if (shorten.length < 1) {
        return `${shorten}...`
      } else if (shorten.length < 10) {
        return shorten
      } else {
      let shorternTitle = `${shorten.substring(0, 10)}... ` 
      return shorternTitle
      }
  }

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
    // console.log('selectedNoteID__Helper Index', indexSelected)
    // console.log('selectedNoteID__Helper ID', noteID)
    return indexSelected;
  };


  //helper function for getting currently selected note from the notestab
  selectNoteForInput = (noteID) => {
    let noteIndex = this.selectedNoteID__Helper(noteID);
    this.setState({
      currentlySelectedIndex: noteIndex
    })
    console.log(noteID)
    console.log(noteIndex)
  }


  //edit a note and saving to state onchange
  changeNote = (event, noteID) => {
    let noteIndex = this.selectedNoteID__Helper(noteID);
    const copyNote = {
      ...this.state.notes[noteIndex]
    };

    copyNote.note = event.target.value;
    const copyNotes = [...this.state.notes];

    copyNotes[noteIndex] = copyNote;
    this.setState({ notes: copyNotes })
  };


  //deletes a note off the noteslist
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
      console.log('test 1')

    //if it is the last remaining note then clear the note and apply new date created and id
    } else if (noteIndex == 0) {

      this.setState({ notes: [{id: uniqid(), note: 'newly deleted', dateCreated: moment().format('L')}]})
      this.setState({ currentlySelectedIndex: 0})
      console.log('test 2')
    //if it is not the first note then just delete note targeted and set the next targeted note as the one above.
    } else {
      copyNotes.splice(noteIndex, 1);
      this.setState({ notes: copyNotes });
      let nextUpAfterDelete = noteIndex - 1
      this.setState({ currentlySelectedIndex: nextUpAfterDelete})
      console.log('test 3')
    } 
    console.log('delete')
  };


  render() {
    let noteList = null;
    let test = 12
    let largeBrowserList = 2
    let largeBrowserInput = 12

    //toggle for showing the notes
    if (this.state.noteListShowing) {
      noteList = (

        <Col className={'alignCol'} xs={4} md={largeBrowserList} lg={largeBrowserList}>
          <div className={'noteListBackground'}>
            <div  className={'notesList'}>
              <NotesList 
                changed={this.selectNoteForInput}
                changeNote={this.changeNote}
                notes={this.state.notes}
                stateObj={this.state}
                clickDelete={this.deleteNoteFromList}
                currentlySelected={this.state.currentlySelectedIndex}
                shorten={this.shortenNoteListTitle}/>
            </div>
          </div>
        </Col>

      )
      test=8
      largeBrowserInput=10
    } 

    if (this.state.currentlySelectedIndex > 2) {

    }


    // state.notes[currentlySelectedIndex]

    console.log(this.state)
    console.log('notes ', this.state.notes)

    return (
      <div className="App">
      <NavbarNote 
        clickDelete={this.deleteNoteFromList}
        clickShowHideList={this.isNoteListShowing}
        clickAddNote={this.addNewNote}
        notes={this.state.notes}
        currentlySelected={this.state.currentlySelectedIndex}
        showing={this.state.noteListShowing}/>

        <button 
          onClick={this.addNewNote} className="add-Note">
          <TiDocumentAdd/>
        </button>
        <button 
          onClick={this.isNoteListShowing} 
          className="hide-list">
          {this.state.noteListShowing ? <MdRemove/> : <MdReorder/>}
        </button>
        <button 
          onClick={() => this.deleteNoteFromList(this.state.notes[this.state.currentlySelectedIndex].id)}><MdDeleteForever/>
        </button>

        <Container>
          <Row>

              {noteList}

            <Col className={'alignCol'} xs={test} md={largeBrowserInput} lg={largeBrowserInput}>
              <div >
                <NoteInput notes={this.state.notes} currentlySelected={this.state.currentlySelectedIndex} changeNote={(event) => this.changeNote(event, this.state.notes[this.state.currentlySelectedIndex].id)} relatedNote={this.state.notes[this.state.currentlySelectedIndex].note}/>
              </div>
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default App;

