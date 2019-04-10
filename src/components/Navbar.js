import React from 'react';
import NoteList from './Notes/NotesList'
import NoteEditor from './NoteEditor'
//button comonents
import DeleteButton from './buttons/DeleteButton';
import AddNoteButton from './buttons/AddNoteButton'
//bootstrap components
import {Container, Row, Col, Navbar, Nav, NavDropdown }from 'react-bootstrap';
//icon components
import { MdNoteAdd, MdReorder, MdRemove, MdDeleteForever } from 'react-icons/md';
import { TiDocumentAdd, TiThMenu } from 'react-icons/ti';
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';

import NoteInput from './NoteInput';


const navbarNote = (props) => {
  return (

    <div className='d-flex' id='wrapper'>
      {/* *****************************************************************
      The noteslist section */}
      <div className="bg-light border-right" id="sidebar-wrapper">
        <AddNoteButton clickAddNote={props.clickAddNote}/>
        <div className="noteslist">
          <div className="list-group list-group-flush">
            <NoteList
              clickDelete={props.clickDelete}
              clickShowHideList={props.clickShowHideList}
              clickAddNote={props.clickAddNote}
              changed={props.changed}
              changeNote={props.changeNote}
              notes={props.notes}
              currentlySelected={props.currentlySelected}
              toggled={props.toggled}
              shorten={props.shorten}/>
          </div>
        </div>
      </div>

      {/* ***********************************************************
      The navbar section */}
      <div id="page-content-wrapper" >
        <Nav className="navbar  navbar-light bg-light border-bottom">

        <button 
          onClick={props.toggled} 
          className="btn btn-primary" 
          id="menu-toggle">
          <TiThMenu/>
        </button>

        <DeleteButton 
          className={'test'} 
          clickDelete={() => props.clickDelete(props.notes[props.currentlySelected].id)}/>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                <a className="dropdown-item">Action</a>
                <a className="dropdown-item">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
        </Nav>

        {/* *****************************************************************
        The note/input section with draftjs editor */}
        <div className='testhere'>
          <div className="container-fluid test-scroll">
            {/* <NoteInput 
              notes={props.notes} 
              currentlySelected={props.currentlySelected} 
              changeNote={props.changeNote} 
              relatedNote={props.relatedNote}/> */}

            <NoteEditor       
              editorState2={props.editorState2} 
              onChange2={props.onChange2}
              placeholder2={props.placeholder2}/>
              {/* <p>{convertToRaw(props.editorState.getCurrentContent()).blocks[0].text}</p> */}

            {/* <Editor 
            editorState={props.editorState2}
            onChange={(editorState) => {props.onChange2(editorState)}}
            placeholder={props.placeholder2}/>
            <h1>{convertToRaw(props.notes[props.currentlySelected].editorState.getCurrentContent()).blocks[0].text}</h1> */}
            {/* <h1>{convertToRaw(props.notes[1].editorState.getCurrentContent()).blocks[0].text}</h1> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default navbarNote
