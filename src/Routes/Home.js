import React from 'react';
import Toolbar from '../Components/Toolbar';
import ToolbarFunctions from "../Components/ToolbarFunctions.js";
import TextEditor from '../Components/TextEditor';

const Home = () => {
  return (
    <div>
      <Toolbar />
      <ToolbarFunctions />
      <TextEditor />
    </div>
  )
}

export default Home;