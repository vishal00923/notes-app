import React from 'react';

import './Header.Styles.scss';

const Header = () => {
    return (
        <div className="header">
            <h1 className="title">Notes</h1>
            <button className="toggle-btn">Toggle Mode</button>
        </div>
    );
};

export default Header;
