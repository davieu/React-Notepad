import React from 'react';
//button comonents
import DeleteButton from './buttons/DeleteButton';
import AddNoteButton from './buttons/AddNoteButton'
import ShowHideListButton from './buttons/ShowHideListButton'
//bootstrap components
import {Container, Row, Col, Navbar, Nav, NavDropdown }from 'react-bootstrap';
//icon components
import { MdNoteAdd, MdReorder, MdRemove, MdDeleteForever } from 'react-icons/md';
import { TiDocumentAdd } from 'react-icons/ti';


const navbarNote = (props) => {
  return (
    <Navbar collapseOnSelect expand={"true"} bg="dark" variant="dark">
      <AddNoteButton clickAddNote={props.clickAddNote}/>
      <DeleteButton clickDelete={() => props.clickDelete(props.notes[props.currentlySelected].id)}/>
      <ShowHideListButton clickShowHideList={props.clickShowHideList} showing={props.showing}/>
      {/* <button 
        onClick={props.clickShowHideList} 
        className="hide-list">
        {props.showing ? <MdRemove/> : <MdReorder/>}
      </button> */}
      <Navbar.Brand href="#home"><h1 className={'title'}>NotePad<MdNoteAdd/></h1>
      </Navbar.Brand>
    </Navbar>
  )
}

export default navbarNote

        {/* {note.id == props.notes[props.currentlySelected].id ? 
        <DeleteButton style={style2} clickDelete={() => props.clickDelete(note.id)}/> : ''} */}