import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({notes, handleAddNote}) => {
    return (
    <div className="notes-list">
            {notes.map((notes)=>(
            <Note 
            id={notes.id} 
            text={notes.text} 
            date={notes.date}/>
            ))}
        <AddNote handleAddNote={handleAddNote} />
    </div>
    );
};

export default NotesList;