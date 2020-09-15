import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";
import { v4 as uuidv4} from "uuid";


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
     
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {     
        return index !==id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateNote clickAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={uuidv4()}
          title={note.title}
          body={note.content}
          id = {index}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
