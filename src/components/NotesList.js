import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({notes}) => {
    return (
    <div className="notes-list">
            {notes.map((notes)=>(
            <Note 
            id={notes.id} 
            text={notes.text} 
            date={notes.date}/>
            ))}
        <AddNote />
    </div>
    );
};

export default NotesList;