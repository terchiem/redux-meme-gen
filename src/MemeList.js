import React from 'react';
import Meme from './Meme';

/** Presentational component that creates a Meme component
 * for each meme in an array.
 */

function MemeList({ memes }) {

  return (
    <div className="MemeList">
      {
        memes.map(m => (
          <Meme
            key={m.id} 
            id={m.id}
            top={m.top}
            bottom={m.bottom}
            image={m.image}
          />
        ))
      }
    </div>
  )
}

export default MemeList;