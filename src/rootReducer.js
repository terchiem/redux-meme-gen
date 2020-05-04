/*
  meme -> { id, top, bottom, image }
*/

const INITIAL_STATE = {
  memes: []
}

function rootReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    
    case "ADD_MEME":
      const newMeme = action.payload;
      return {
        ...state, 
        memes: [...state.memes, newMeme]
      };
      

    case "REMOVE_MEME":
      const removeId = action.payload.id;
      return {
        ...state, 
        memes: [...state.memes.filter(m => m.id !== removeId)]
      };


    default:
      return state;
  }
}

export default rootReducer;