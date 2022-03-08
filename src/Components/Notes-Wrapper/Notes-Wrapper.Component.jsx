import React, { useState, useEffect } from 'react';

import Header from '../Header/Header.Component';
import SearchBar from '../Search-Bar/Search-Bar.Component';
import NotesList from '../Notes-List/Notes-List.Component';

import './Notes-Wrapper.Styles.scss';

const NotesWrapper = () => {
    const initialState = JSON.parse(localStorage.getItem('notes')) || [];
    const initialTheme = JSON.parse(localStorage.getItem('theme')) || false;

    const [notes, setNotes] = useState(initialState);
    const [theme, setTheme] = useState(initialTheme);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
        localStorage.setItem('theme', JSON.stringify(theme));
    }, [notes, theme]);

    return (
        <div className={`${theme && 'change-theme'} main-container`}>
            <div className="container">
                <Header theme={theme} handleTheme={setTheme} />
                <SearchBar handleSearchNote={setSearchText} />
                <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))} setNotes={setNotes} />
            </div>
        </div>
    );
};

export default NotesWrapper;
