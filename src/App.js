import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';

import NewMemeForm from './NewMemeForm';
import MemeList from './MemeList';

/** Main App component for Meme Generator */

function App() {

  const memes = useSelector(state => state.memes);

  return (
    <div className="App">
      <NewMemeForm />
      <MemeList memes={memes} />
    </div>
  );
}

export default App;
