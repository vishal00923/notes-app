import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './Note.Styles.scss';

const Note = ({ note, notes, setNotes }) => {
    const handleDelete = (note) => {
        const id = note.id;
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes([...newNotes]);
    };

    return (
        <div className="card">
            <p className="text">{note.text}</p>
            <div className="card-footer">
                <span className="date">{note.date}</span>
                <button className="delete-btn" onClick={() => handleDelete(note)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
};

export default Note;
