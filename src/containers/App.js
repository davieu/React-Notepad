import React, { Component } from 'react';
import './App.css';
import NavbarNote from '../components/Navbar'
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';

let moment = require('moment');
let uniqid = require('uniqid');

class App extends Component {
  state = {
    notes: [
      {id: uniqid(), dateCreated: moment().format('L'), editorState: EditorState.createEmpty()}, {id: uniqid(), dateCreated: moment().format('L'), editorState: EditorState.createEmpty()}, {id: uniqid(), dateCreated: moment().format('L'), editorState: EditorState.createEmpty()}
    ],
    toggled:false,
    currentlySelectedIndex: 0,
    newSelected: 0
  };


  // focuses the editor for typing on app startup
  componentDidMount = () => {
    this.domEditor.focus()
  };
  
  // focuses the editor on state change and also for highlighting the note in the noteslist
  componentDidUpdate = () => {
    this.allNotesRefreshed();
    
    document.querySelector(`.${this.state.notes[this.state.currentlySelectedIndex].id}`).style.backgroundColor = '#dae0e5'
    this.domEditor.focus()
  };

/*********************************************
 * DRAFT JS functions
 */

  // handles the state of the editor
  onChange = (editorState, noteID) => {

    // copying the single note that is going to be changed
    const copyNote = {
      ...this.state.notes[this.state.currentlySelectedIndex]
    };

    // editorState is now equal to new editorState
    copyNote.editorState = editorState
    // copy all of the notes in the array
    const copyNotes = [...this.state.notes];

    // giving the new editorState into the the copy
    copyNotes[this.state.currentlySelectedIndex] = copyNote;

    this.setState({ notes: copyNotes })
  };

  makeBold = () => {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.notes[this.state.currentlySelectedIndex].editorState, 'BOLD'
    ));
  };

  //toggle font test
  toggleFontSize = fontSize => {
    this.onChange(RichUtils.toggleBlockType(this.state.notes[this.state.currentlySelectedIndex].editorState, fontSize))
  }

  // sets a ref to the editor for focusing it more easily
  setDomEditorRef = ref => {
    this.domEditor = ref
  };


/************************************************
* HELPER FUNCTIONS
*/
  // finds the selected note id/index
  selectedNoteID__Helper = (noteID) => {
    let indexSelected = this.state.notes.findIndex(note => {
      return note.id === noteID;
    })
    this.setState({newSelected: indexSelected})
    return indexSelected;
  };

  selectedFontID__Helper = (noteID) => {

  };

  selectedVOlor__Helper = (noteID) => {

  };
  
  // refreshes all notes to unhighlighted/ unfocused
  allNotesRefreshed = () => {
    let itemsListNodes = document.querySelectorAll('.noteItem')
    let itemList = Array.from(itemsListNodes)
    itemList.forEach(cur => cur.style.backgroundColor = "#f8f9fa")
  };

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
  };

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
  };

/************************************************
 * App functions
 */

  // creates a new note on the list
  addNewNote = () => {
    const copyNotes = [...this.state.notes];
    let newNote = {
      id: uniqid(),
      dateCreated: moment().format('L'),
      editorState: EditorState.createEmpty()
    };

    this.setState({
      notes: [...copyNotes, newNote]
    });

    this.setState({
      currentlySelectedIndex: this.state.notes.length
    })
  };

  // deletes a note off the noteslist
  deleteNoteFromList = (noteID) => {
    const copyNotes = [...this.state.notes];
    let noteIndex = this.selectedNoteID__Helper(noteID);
    let notesLength = this.state.notes.length    

    // if the first note is clicked and the length of notes is > 1
    // then delete the note and make the next note under it the first.
    if (noteIndex === 0 && notesLength > 1) {
      copyNotes.splice(noteIndex, 1);
      this.setState({ notes: copyNotes });
      this.setState({ currentlySelectedIndex: 0})

    // if it is the last remaining note then clear the note and apply new date created and id
    } else if (noteIndex === 0) {
      this.setState({ notes: [{id: uniqid(), editorState: EditorState.createEmpty(), dateCreated: moment().format('L')}]})
      this.setState({ currentlySelectedIndex: 0})
    // if it is not the first note then just delete note targeted and set the next targeted note as the one above.
    } else {
      copyNotes.splice(noteIndex, 1);
      this.setState({ notes: copyNotes });
      let nextUpAfterDelete = noteIndex - 1
      this.setState({ currentlySelectedIndex: nextUpAfterDelete})
    } 
  };


  render() {
    console.log(RichUtils)
    return (
      <div className="App">
        <NavbarNote 
          changed={this.selectNoteForInput}
          clickDelete={this.deleteNoteFromList}
          clickShowHideList={this.isNoteListShowing}
          clickAddNote={this.addNewNote}
          notes={this.state.notes}
          currentlySelected={this.state.currentlySelectedIndex}
        
          toggled={this.toggleClass}

          editorState={this.state.notes[this.state.currentlySelectedIndex].editorState}
          onChange={this.onChange}
          editorRef={this.setDomEditorRef}
          makeBold={this.makeBold}
          changeFont={this.toggleFontSize}
          />
      </div>
    );
  }
}

export default App;