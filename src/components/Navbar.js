import React from 'react';
import NoteList from './Notes/NotesList'
import NoteEditor from './NoteEditor'
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';

//button comonents
import DeleteButton from './buttons/DeleteButton';
import AddNoteButton from './buttons/AddNoteButton'
//bootstrap components
import {Container, Row, Col, Navbar, Nav, NavDropdown }from 'react-bootstrap';
//icon components
import { TiThMenu } from 'react-icons/ti';



const navbarNote = (props) => {
  return (

    <div className='d-flex' id='wrapper'>
      {/* *****************************************************************
      The noteslist section */}
      <div className="bg-light border-right" id="sidebar-wrapper">
        <AddNoteButton 
        clickAddNote={props.clickAddNote}
        notes={props.notes}
        currentlySelected={props.currentlySelected}/>
        <div className="noteslist">
          <div className="list-group list-group-flush">
            <NoteList
              clickDelete={props.clickDelete}
              clickShowHideList={props.clickShowHideList}
              clickAddNote={props.clickAddNote}
              changed={props.changed}
              notes={props.notes}
              currentlySelected={props.currentlySelected}/>
          </div>
        </div>
      </div>

      {/* ***********************************************************
      The navbar section */}
      <div id="page-content-wrapper" >
        <Nav className="navbar  navbar-light bg-light border-bottom">
      
      <div>
      <button 
          onClick={props.toggled} 
          className="btn btn-primary" 
          id="menu-toggle">
          <TiThMenu/>
        </button>

        <DeleteButton 
          clickDelete={() => props.clickDelete(props.notes[props.currentlySelected].id)}
          notes={props.notes}
          currentlySelected={props.currentlySelected}/>
      </div>

        
        {/* <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}

        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
        </div> */}
        </Nav>

        {/* *****************************************************************
        
        The note/input section with draftjs editor */}
        {/* <button onClick={() => {props.makeBold();}}>BOLD</button> */}
        {/* <button onClick={e => props.changeFont('100px')}>100px</button> */}
        <div className="toolbar">{props.buttons}</div>
        <NoteEditor       
          editorState={props.editorState} 
          onChange={props.onChange}
          editorRef={props.editorRef}
          />
      </div>
    </div>
  )
}

export default navbarNote
