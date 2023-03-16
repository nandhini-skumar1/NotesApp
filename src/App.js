import { useState } from "react";
import {nanoid} from 'nanoid';
import NotesList from "./components/NotesList";
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [notes,setNotes]= useState([
    {
    id: nanoid(),
    text:"This is my first note",
    date:"10/2/2023",
    },
    {
      id: nanoid(),
      text:"This is my second note",
      date:"14/2/2023",
    },
    {
        id: nanoid(),
        text:"This is my third note",
        date:"20/2/2023",
    },
    {
      id: nanoid(),
      text:"This is my fourth note",
      date:"25/2/2023",
    },
    {
      id: nanoid(),
      text:"This is my new note",
      date:"1/3/2023",
    },
    ]);

    const [searchText, setSearchText] = useState('');

    const [darkMode, setDarkMode] = useState(false);

    const addNote = (text) => {
      const date= new Date();
      const newNote= {
        id:nanoid(),
        text:text,
        date:date.toLocaleDateString()
      }
      const newNotes=[...notes,newNote];
      setNotes(newNotes);
    };

    const deleteNote = (id) => {
     const newNotes= notes.filter((note)=> note.id!==id);
     setNotes(newNotes);
    }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
     <div className="container">
    <Header handleToggleDarkMode={setDarkMode} />
    <Search handleSearchNote={setSearchText}/>
    <NotesList 
     notes={notes.filter((note)=>
      note.text.toLowerCase().includes(searchText)
      )} 
     handleAddNote={addNote} 
     handleDeleteNote={deleteNote}/>
  </div>
  </div>
  );
};

export default App;