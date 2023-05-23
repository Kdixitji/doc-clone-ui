import React from 'react';
import "../Components/TextEditorStyles.css";

const TextEditor = () => {
  return (
    <div>
      <div class='ruler'>
      <div class='cm'>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>  
      </div>
      <div class='cm'>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
      </div>
      <div class='cm'>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
      </div>
      <div class='cm'>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
      </div>
      <div class='cm'>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
      </div>
      <div class='cm'>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
      </div>
      <div class='cm'>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
      </div>
      <div class='cm'>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>
        <div class='mm'></div>  
        <div class='mm'></div>  
        <div class='mm'></div>  
        <div class='mm'></div>  
      </div>
      <div class='cm'></div>
      </div>
      <div id="heading" contenteditable="true"></div>
      <div id="pagec">
        <div id="content" contenteditable="true" title="Type @ to insert"></div>
      </div>
    </div>
  )
}

export default TextEditor