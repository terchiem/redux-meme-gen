import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

/** Form component to create a new meme. Dispatches form data */

function NewMemeForm() {
  const [formData, setFormData] = useState({
    top: "",
    bottom: "",
    image: ""
  })

  const dispatch = useDispatch();

  function handleSubmit(evt) {
    evt.preventDefault();

    dispatch({
      type: "ADD_MEME",
      payload: {
        ...formData,
        id: uuid()
      }
    })
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({...data, [name]: value}));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create a Meme</h1>
      <label htmlFor="top">Top Text</label>
      <input
        id="top"
        name="top"
        value={formData.top}
        onChange={handleChange}
      />
      <label htmlFor="bottom">Bottom Text</label>
      <input
        id="bottom"
        name="bottom"
        value={formData.bottom}
        onChange={handleChange}
      />
      <label htmlFor="image">Image URL</label>
      <input
        id="image"
        name="image"
        value={formData.image}
        onChange={handleChange}
      />
      <button>Generate Meme</button>
    </form>
  )
}

export default NewMemeForm;