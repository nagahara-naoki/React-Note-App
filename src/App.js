import "./App.css";
import { Side } from "./components/Side";
import { Main } from "./components/Main";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("local")) || []);
  const [activeNote, setActiveNote] = useState(false);
  const addNote = () => {
    const newNote = {
      id: uuid(),
      title: "",
      content: "",
      createAt: Date.now(),
    };
    setNotes([...notes, newNote]);
  };
  const deleteNote = (id) => {
    const filterId = notes.filter((note) => id !== note.id);
    setNotes(filterId);
  };
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };
  const onUpdateNote = (updatedNote) => {
    const upDateNoteArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });
    setNotes(upDateNoteArray);
  };
  useEffect(() => {
    localStorage.setItem("local", JSON.stringify(notes));
  }, [notes]);
  return (
    <div className="App">
      <Side
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        deleteNote={deleteNote}
        addNote={addNote}
        notes={notes}
      />
      <Main onUpdateNote={onUpdateNote} getActiveNote={getActiveNote()} />
    </div>
  );
}

export default App;
