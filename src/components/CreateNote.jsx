import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [clicked, setClick] = useState(false);

  function handleClick(){
      setClick(true);
  }

  function handleChange(event) {
    const { value, name } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function onSubmit(event) {
    props.clickAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: "",
    });
    setClick(false);
  }

  return (
    <div>
      <form className="create-note">
        <input
          style = {clicked ? null : {display: "none"}}
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onClick = {handleClick}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows= {clicked ? "3" : 1}
          value={note.content}
        />
        <Zoom in={clicked}>
        <Fab onClick={onSubmit}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
