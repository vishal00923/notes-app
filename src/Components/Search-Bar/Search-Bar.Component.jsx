import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import './Search-Bar.Styles.scss';

const SearchBar = ({ handleSearchNote }) => {
    return (
        <div className="search-bar">
            <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
            <input className="search" type="text" placeholder="search notes..." onChange={(e) => handleSearchNote(e.target.value)} />
        </div>
    );
};

export default SearchBar;
