import React from 'react';
import Search from './Search';

function Header({ setUserQuery }) {
    return (
        <header className="site-header">
            <div className="wrap">
                <Search setUserQuery={setUserQuery} />
            </div>
        </header>
    );
}

export default Header;
