import React from 'react';
import NoteList from './Notes/NotesList'
//button comonents
import DeleteButton from './buttons/DeleteButton';
import AddNoteButton from './buttons/AddNoteButton'
import ShowHideListButton from './buttons/ShowHideListButton'
//bootstrap components
import {Container, Row, Col, Navbar, Nav, NavDropdown }from 'react-bootstrap';
//icon components
import { MdNoteAdd, MdReorder, MdRemove, MdDeleteForever } from 'react-icons/md';
import { TiDocumentAdd, TiThMenu } from 'react-icons/ti';

import NoteInput from './NoteInput';


const navbarNote = (props) => {
  return (

    <div className='d-flex' id='wrapper'>

      <div className="bg-light border-right" id="sidebar-wrapper">
      <AddNoteButton clickAddNote={props.clickAddNote}/>
        {/* <div className="sidebar-heading">Start Bootstrap </div> */}
        <div className="noteslist">
        <div className="list-group list-group-flush">
          <NoteList
            changed={props.changed}
            changeNote={props.changeNote}
            clickDelete={props.clickDelete}
            clickShowHideList={props.clickShowHideList}
            clickAddNote={props.clickAddNote}
            notes={props.notes}
            currentlySelected={props.currentlySelected}
            showing={props.showing}
            toggled={props.toggled}
            shorten={props.shorten}/>
            </div>
        </div>
      </div>

      <div id="page-content-wrapper">

<Nav className="navbar  navbar-light bg-light border-bottom">

<button onClick={props.toggled} className="btn btn-primary" id="menu-toggle"><TiThMenu/></button>
<DeleteButton className={'test'} clickDelete={() => props.clickDelete(props.notes[props.currentlySelected].id)}/>


  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</Nav>

  <div className="container-fluid">
    <NoteInput 
            notes={props.notes} 
            currentlySelected={props.currentlySelected} 
            changeNote={props.changeNote} 
            relatedNote={props.relatedNote}/>
  </div>
</div>


    </div>

    // <Navbar collapseOnSelect expand={"true"} bg="dark" variant="dark">
    //   <AddNoteButton clickAddNote={props.clickAddNote}/>
    //   <DeleteButton clickDelete={() => props.clickDelete(props.notes[props.currentlySelected].id)}/>
    //   <ShowHideListButton clickShowHideList={props.clickShowHideList} showing={props.showing}/>
    //   {/* <button 
    //     onClick={props.clickShowHideList} 
    //     className="hide-list">
    //     {props.showing ? <MdRemove/> : <MdReorder/>}
    //   </button> */}
    //   <Navbar.Brand href="#home"><h1 className={'title'}>NotePad<MdNoteAdd/></h1>
    //   </Navbar.Brand>
    // </Navbar>
  )
}

export default navbarNote

        {/* {note.id == props.notes[props.currentlySelected].id ? 
        <DeleteButton style={style2} clickDelete={() => props.clickDelete(note.id)}/> : ''} */}