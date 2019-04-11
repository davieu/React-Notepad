import React from 'react'
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';

const NoteEditor = (props) => {
  return (
  <div className="container-fluid editor">
    <Editor 
      editorState={props.editorState} 
      onChange={(editorState) => {props.onChange(editorState)}}
      ref={props.editorRef}/>
  </div>
  )
}

export default NoteEditor;