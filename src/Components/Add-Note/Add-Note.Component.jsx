import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './Add-Note.Styles.scss';

const AddNote = ({ notes, setNotes }) => {
    const [noteText, setNoteText] = useState('');
    const charLimit = 300;

    const handleChange = (e) => {
        if (charLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value);
        }
    };

    const handleClick = () => {
        if (noteText.trim().length) {
            const newNote = {
                id: uuidv4(),
                text: noteText,
                date: new Date().toLocaleDateString(),
            };
            setNotes([...notes, newNote]);
            setNoteText('');
        } else {
            alert('Please Enter Some Notes...');
        }
    };

    return (
        <div className="card add-note">
            <textarea className="textarea" cols="10" rows="12" placeholder="add a note..." value={noteText} onChange={handleChange}></textarea>
            <div className="card-footer">
                <span className="char-limit">{charLimit - noteText.length} Remaining</span>
                <button className="save-btn" onClick={handleClick}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default AddNote;
