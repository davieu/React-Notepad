import React, { Component } from 'react';
import './App.css';
// import NotesList from '../components/Notes/NotesList';
// import NoteInput from '../components/NoteInput';
// import Test from '../components/test';
// import { MdNoteAdd, MdReorder, MdRemove, MdDeleteForever } from 'react-icons/md';
// import { TiDocumentAdd } from 'react-icons/ti';
// import { FaAngleDoubleUp, FaAngleDoubleDown, FaThList} from 'react-icons/fa';
// import DeleteButton from '../components/buttons/DeleteButton';
import NavbarNote from '../components/Navbar'
import {EditorState, RichUtils} from 'draft-js';

let moment = require('moment');
let uniqid = require('uniqid');
let randomWords = require('random-words');


class App extends Component {
  state = {
    notes: [
      {id: uniqid(), note: '', dateCreated: moment().format('L')}
    ],
    toggled:false,
    currentNote: '',
    currentlySelectedIndex: 0,
    editorState: EditorState.createEmpty(),
    targ: true
  };


/*********************************************
 * DRAFT JS functions
 */

  // handles the state of the editor
  onChange = (editorState) => {
    this.setState({editorState})
  }

  makeBold() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState, 'BOLD'
    ));
  }

/************************************************
* HELPER FUNCTIONS
*/
  // finds the selected note id/index
  selectedNoteID__Helper = (noteID) => {
    let indexSelected = this.state.notes.findIndex(note => {
      return note.id === noteID;
    })
    return indexSelected;
  };
  
  // refreshes all notes to unhighlighted/ unfocused
  allNotesRefreshed = () => {
    let itemsListNodes = document.querySelectorAll('.noteItem')
    let itemList = Array.from(itemsListNodes)
    itemList.forEach(cur => cur.style.backgroundColor = "#f8f9fa")
  }

  // sets the state for currently selected note and also focuses it
  selectNoteForInput = (noteID) => {
    let noteIndex = this.selectedNoteID__Helper(noteID);
    this.setState({
      currentlySelectedIndex: noteIndex
    })
    this.allNotesRefreshed()
    // focuses the currently selected
    document.querySelector(`.${this.state.notes[noteIndex].id}`).style.backgroundColor = '#dae0e5'
    console.log(noteID)
  }

  // toggles the notelist from show to hide with add/remove class
  toggleClass = (e) => {
    e.preventDefault();
    if (this.state.toggled) {
      document.getElementById('wrapper').classList.remove('toggled')
      this.setState({toggled: false})
    } else {
      document.getElementById('wrapper').classList.add('toggled')
      this.setState({toggled: true})
    }
  }

  // shortens the note title on the list
  shortenNoteListTitle = (shorten) => {

    if (shorten.length < 1) {
        return `${shorten}...`
    } else if (shorten.length < 20) {
        return shorten
    } else {
        let shorternTitle = `${shorten.substring(0, 20)}... ` 
        return shorternTitle
    }
  }

/************************************************
 * App functions
 */

  // creates a new note on the list
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

    this.setState({
      currentlySelectedIndex: this.state.notes.length
    })

    // didUpdate was needed to get the currently updated selected note
    this.componentDidUpdate = () => {
      this.allNotesRefreshed();
      document.querySelector(`.${this.state.notes[this.state.currentlySelectedIndex].id}`).style.backgroundColor = '#dae0e5'
    }
  };

  // edit a note and saving to state onchange
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


  // deletes a note off the noteslist
  deleteNoteFromList = (noteID) => {
    const copyNotes = [...this.state.notes];
    let noteIndex = this.selectedNoteID__Helper(noteID);
    let notesLength = this.state.notes.length    

    // if the first note is clicked and the length of notes is > 1
    // then delete the note and make the next note under it the first.
    if (noteIndex == 0 && notesLength > 1) {
      copyNotes.splice(noteIndex, 1);
      this.setState({ notes: copyNotes });
      this.setState({ currentlySelectedIndex: 0})

    // if it is the last remaining note then clear the note and apply new date created and id
    } else if (noteIndex == 0) {
      this.setState({ notes: [{id: uniqid(), note: 'newly deleted', dateCreated: moment().format('L')}]})
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
    // state.notes[currentlySelectedIndex]
    // console.log(this.state.notes.length)
    console.log('selected ',this.state.currentlySelectedIndex)
    // console.log(this.state.notes[this.state.currentlySelectedIndex])
    // console.log(this.state)
    // console.log('notes ', this.state.notes)
    // console.log(this.state.editorState)

    return (
      <div className="App">
        <NavbarNote 
          changed={this.selectNoteForInput}
          changeNote={this.changeNote}
          clickDelete={this.deleteNoteFromList}
          clickShowHideList={this.isNoteListShowing}
          clickAddNote={this.addNewNote}
          notes={this.state.notes}
          currentlySelected={this.state.currentlySelectedIndex}
          changeNote={(event) => this.changeNote(event, this.state.notes[this.state.currentlySelectedIndex].id)} 
          relatedNote={this.state.notes[this.state.currentlySelectedIndex].note}
        
          shorten={this.shortenNoteListTitle}
          toggled={this.toggleClass}

          editorState={this.state.editorState} 
          onChange={this.onChange}
          placeholder="this is an editor" 
          // editorState={this.state.notes[this.state.currentlySelectedIndex].editorState} 
          // editorState2={this.state.editorState} 
          // onChange={(editorState) => {this.onChange(editorState)}}
          // placeholder="this is an editor"
          />
      </div>
    );
  }
}

export default App;