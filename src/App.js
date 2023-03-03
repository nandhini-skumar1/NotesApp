import { useState } from "react";
import {nanoid} from 'nanoid';
import NotesList from "./components/NotesList";

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
      text:"This is my fifth note",
      date:"1/3/2023",
    },
    {
      id: nanoid(),
      text:"This is my new note",
      date:"1/3/2023",
    },
    ]);
  return ( <div className="container">
    <NotesList notes={notes}/>
  </div>
  );
};
export default App;