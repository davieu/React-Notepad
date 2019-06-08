import React from 'react'
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';

const NoteEditor = (props) => {
  return (
  <div className="container-fluid editor">
    <div className="editor2">
    <Editor 
      editorState={props.editorState} 
      onChange={(editorState) => {props.onChange(editorState)}}
      ref={props.editorRef}/>
      </div>
  </div>
  )
}

export default NoteEditor;