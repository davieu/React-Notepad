import React from 'react'
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';

const NoteEditor = (props) => {
  return (
  <Editor 
        editorState={props.editorState} 
        onChange={(editorState) => {props.onChange(editorState)}}
        placeholder={props.placeholder}/>
        // editorState={props.notes[props.currentlySelected].editorState} 
        // onChange={(editorState) => {props.onChange(props.notes[props.currentlySelected].editorState)}}
        // placeholder={props.placeholder}/>
  )
}

export default NoteEditor;