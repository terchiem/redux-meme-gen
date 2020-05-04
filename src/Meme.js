import React from 'react';
import { useDispatch } from 'react-redux';
import './Meme.css';

/** Presentational component to display a meme */

function Meme({ id, top, bottom, image }) {

  const dispatch = useDispatch();

  function removeMeme() {
    dispatch({
      type: "REMOVE_MEME",
      payload: { id }
    });
  }

  return (
    <div className="Meme">
      <div className="Meme-top Meme-text">{top}</div>
      <div className="Meme-bottom Meme-text">{bottom}</div>
      <img className="Meme-image" src={image} alt={id}/>
      <button onClick={removeMeme}>X</button>
    </div>
  )
}

export default Meme;