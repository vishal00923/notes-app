import React from 'react';

import './Header.Styles.scss';

const Header = ({ handleTheme }) => {
    return (
        <div className="header">
            <h1 className="title">Notes App</h1>
            <button className="toggle-btn" onClick={() => handleTheme((prevTheme) => !prevTheme)}>
                Toggle Mode
            </button>
        </div>
    );
};

export default Header;
