import React from 'react'
import {Editor, EditorState, RichUtils, convertToRaw} from 'draft-js';

const NoteEditor = (props) => {
  return (
  // <Editor 
  //       editorState={props.editorState} 
  //       onChange={(editorState) => {props.onChange(editorState)}}
  //       placeholder={props.placeholder}/>
  <Editor 
  editorState={props.editorState2} 
  onChange={(editorState) => {props.onChange2(editorState)}}
  placeholder={props.placeholder2}/>
  )
}

export default NoteEditor;