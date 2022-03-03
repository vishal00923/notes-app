import React from 'react';

import Note from '../Note/Note.Component';
import AddNote from '../Add-Note/Add-Note.Component';

import './Notes-List.Styles.scss';

const NotesList = ({ notes, setNotes }) => {
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <Note note={note} notes={notes} setNotes={setNotes} key={note.id} />
            ))}
            <AddNote notes={notes} setNotes={setNotes} />
        </div>
    );
};

export default NotesList;
