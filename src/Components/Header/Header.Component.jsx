import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';

import './Header.Styles.scss';

const Header = ({ theme, handleTheme }) => {
    return (
        <div className="header">
            <h1 className="title">Notes App</h1>
            <button className="toggle-btn" onClick={() => handleTheme((prevTheme) => !prevTheme)}>
                {theme ? <FontAwesomeIcon icon={faToggleOn} /> : <FontAwesomeIcon icon={faToggleOff} />}
            </button>
        </div>
    );
};

export default Header;
