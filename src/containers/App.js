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
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';

import {Container, Row, Col, Navbar }from 'react-bootstrap';

let moment = require('moment');
let uniqid = require('uniqid');
let randomWords = require('random-words');


class App extends Component {
  state = {
    notes: [
      {id: uniqid(), note: '', dateCreated: moment().format('L'), selected:false}
    ],
    noteListShowing: true,
    toggled:false,
    currentNote: '',
    currentlySelectedIndex: 0,
    editorState: EditorState.createEmpty(),
    targ: true
  };
  // state = {
  //   notes: [
  //     {id: uniqid(), note: '', dateCreated: moment().format('L')}
  //   ],
  //   noteListShowing: true,
  //   toggled:false,
  //   currentNote: '',
  //   currentlySelectedIndex: 0,
  // };

  componentDidMount = () => {
    this.setState({currentlySelectedIndex:0})
  }

  onChange = (editorState) => {
    this.setState({editorState})
    // let editor = this.state.notes[this.state.currentlySelectedIndex].editorState
    // this.setState({editor})
  }

  makeBold() {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState, 'BOLD'
    ));
  }

  //toggle for hiding and showing the notes list.
  isNoteListShowing = () => {
    const isShowing = this.state.noteListShowing;
    this.setState({
      noteListShowing: !isShowing
    });
  };

  toggleClass = (e) => {
    e.preventDefault();
    console.log(e.target)
    if (this.state.toggled) {
      document.getElementById('wrapper').classList.remove('toggled')
      this.setState({toggled: false})
    } else {
      document.getElementById('wrapper').classList.add('toggled')
      this.setState({toggled: true})
    }
  }

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
    document.querySelector(`.${this.state.notes[this.state.currentlySelectedIndex].id}`).classList.add('noteFocused')
    let indexSelected = this.state.notes.findIndex(note => {
      return note.id === noteID;
    })

    // console.log('selectedNoteID__Helper Index', indexSelected)
    // console.log('selectedNoteID__Helper ID', noteID)
    return indexSelected;
  };

  // componentDidMount = () =>  {
  //   document.querySelector(`.${this.state.notes[this.state.currentlySelectedIndex].id}`).style.color = 'red';
  // }

  // turnblack = () => {
  //   document.querySelector(`.${this.state.notes[this.state.currentlySelectedIndex].id}`).style.color = 'black'
  // }


      // console.log(this.state.currentlySelectedIndex)
      // console.log(this.state.notes[this.state.currentlySelectedIndex].id)
      // const isShowing = this.state.notes[this.state.currentlySelectedIndex].selected;
      // if (this.state.notes[this.state.currentlySelectedIndex].selected) {
      //   this.setState({
      //     targ: !isShowing
      //   });
      // }

      // if (this.state.notes[this.state.currentlySelectedIndex].selected) {
      //   this.setState({
      //     targ: !isShowing
      //   });
      // }

    // }
    // document.querySelector(`.${this.state.notes[this.state.currentlySelectedIndex + 1].id}`).style.color = 'red'
    // document.querySelector(`.${this.state.notes[this.state.currentlySelectedIndex].id}`).classList.add = 'noteFocused'

    // componentDidMount = () => {
    //   document.querySelector(`.${this.state.notes[0].id}`).style.backgroundColor = '#dae0e5 '
    // }

    // componentDidUpdate = () => {
    //   document.querySelector(`.${this.state.notes[0].id}`).style.backgroundColor = '#f8f9fa'
    // }
    componentDidMount = () => {
      document.querySelector(`.${this.state.notes[this.state.currentlySelectedIndex].id}`).style.backgroundColor = '#dae0e5'
    }

    componentDidUpdate = () => {
      // let itemsListNodes = document.querySelectorAll('.noteItem')
      // let itemList = Array.from(itemsListNodes)
  
      // itemList.forEach(cur => cur.style.backgroundColor = "#f8f9fa")
      document.querySelector(`.${this.state.notes[this.state.currentlySelectedIndex].id}`).style.backgroundColor = '#dae0e5'
      
    }


  //helper function for getting currently selected note from the notestab
  selectNoteForInput = (noteID) => {
    let noteIndex = this.selectedNoteID__Helper(noteID);
    this.setState({
      currentlySelectedIndex: noteIndex
    })

    let itemsListNodes = document.querySelectorAll('.noteItem')
    let itemList = Array.from(itemsListNodes)

    // itemList.forEach(cur => cur.style.backgroundColor = "#f8f9fa")
    // itemList.forEach(cur => cur.style.backgroundColor = "#f8f9fa")
    // itemList.forEach(cur => 
    //   cur.style.backgroundColor = "#f8f9fa")

    // document.querySelector(`.${this.state.notes[noteIndex].id}`).style.backgroundColor = '#dae0e5'
    // itemList.forEach(cur => cur.classList.add('target-item'))
    // document.querySelector(`.${this.state.notes[noteIndex].id}`).style.backgroundColor = '#dae0e5'

    // if (document.querySelector(`.${this.state.notes[noteIndex].id}`)) {
    //   document.querySelector(`.${this.state.notes[noteIndex].id}`).style.backgroundColor = '#dae0e5'
    // } else if (!document.querySelector(`.${this.state.notes[noteIndex].id}`)) {
    //       let itemsListNodes = document.querySelectorAll('.noteItem')
    // let itemList = Array.from(itemsListNodes)
    // itemList.forEach(cur => cur.style.backgroundColor = "#f8f9fa")
    // }
    // else {
    //   document.querySelector(`.${this.state.notes[noteIndex].id}`).style.backgroundColor = '#dae0e5 '
    // }
    // document.querySelector(`.${this.state.notes[noteIndex].id}`).style.backgroundColor = '#dae0e5 '

    // this.turnblack()

    // let isShowing = this.state.notes[this.state.currentlySelectedIndex].selected;

    // this.setState({isShowing: true})
    // console.log(this.state.notes[this.state.currentlySelectedIndex].selected)

    // document.querySelector(`.${this.state.notes[this.state.currentlySelectedIndex].id}`).style.color = 'black'
    // document.querySelector(`.${this.state.notes[this.state.currentlySelectedIndex].id}`).style.color = 'red'


    console.log(noteID)
    console.log(noteIndex)
    console.log('sdfbsdhufvshdvfhjv ')
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
    // if (this.state.noteListShowing) {
    //   noteList = (

    //     <Col className={'alignCol'} xs={4} md={largeBrowserList} lg={largeBrowserList}>
    //       <div className={'noteListBackground'}>
    //         <div  className={'notesList'}>
    //           <NotesList 
    //             changed={this.selectNoteForInput}
    //             changeNote={this.changeNote}
    //             notes={this.state.notes}
    //             stateObj={this.state}
    //             clickDelete={this.deleteNoteFromList}
    //             currentlySelected={this.state.currentlySelectedIndex}
    //             shorten={this.shortenNoteListTitle}
    //             />
                
    //         </div>
    //       </div>
    //     </Col>

    //   )
    //   test=8
    //   largeBrowserInput=10
    // } 

    // if (this.state.currentlySelectedIndex > 2) {

    // }


    // state.notes[currentlySelectedIndex]
    console.log(this.state.notes[this.state.currentlySelectedIndex].selected)
    // console.log(this.state)
    // console.log('notes ', this.state.notes)
    // console.log(this.state.editorState)

    return (
      <div className="App">
      <NavbarNote 
        targ={this.state.targ}
        turnred={this.turnRed}
        touched={this.focusButton}
        changed={this.selectNoteForInput}
        changeNote={this.changeNote}
        clickDelete={this.deleteNoteFromList}
        clickShowHideList={this.isNoteListShowing}
        clickAddNote={this.addNewNote}
        notes={this.state.notes}
        currentlySelected={this.state.currentlySelectedIndex}
        showing={this.state.noteListShowing}
        toggled={this.toggleClass}
        shorten={this.shortenNoteListTitle}
        changeNote={(event) => this.changeNote(event, this.state.notes[this.state.currentlySelectedIndex].id)} 
        relatedNote={this.state.notes[this.state.currentlySelectedIndex].note}
        editorState={this.state.editorState} 
        onChange={this.onChange}
        placeholder="this is an editor" 
        // editorState={this.state.notes[this.state.currentlySelectedIndex].editorState} 
        // editorState2={this.state.editorState} 
        // onChange={(editorState) => {this.onChange(editorState)}}
        // placeholder="this is an editor"
        />

{/* <p>{JSON.stringify(this.state.editorState.getCurrentContent())}</p> */}
              {/* <Editor 
        editorState={this.state.editorState} 
        onChange={(editorState) => {this.onChange(editorState)}}
        placeholder="this is an editorsssssssssssssssssssssssssssssssssssssssssssssssssssssssss" /> */}


        {/* <Container>
          <Row>

              {noteList}

            <Col className={'alignCol'} xs={test} md={largeBrowserInput} lg={largeBrowserInput}>
              <div >
                <NoteInput notes={this.state.notes} currentlySelected={this.state.currentlySelectedIndex} changeNote={(event) => this.changeNote(event, this.state.notes[this.state.currentlySelectedIndex].id)} relatedNote={this.state.notes[this.state.currentlySelectedIndex].note}/>
              </div>
            </Col>
          </Row>
        </Container> */}

      </div>
    );
  }
}

export default App;

        {/* <button 
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
        </button> */}