import React from 'react';

import Search from './Search';
import logo from '../../assets/images/how-can-you-help-logo.png';

function Header({ setUserQuery, setUserZip }) {
    return (
        <header className="site-header">
            <div className="wrap">
                <img src={logo} />
                <ul>
                    <li>
                        <a href="https://angry-lamport-0a7553.netlify.com/index.html">Home</a>
                    </li>
                    <li>
                        <a href="https://angry-lamport-0a7553.netlify.com/aboutus.html">About Us</a>
                    </li>
                    <li>
                        <a href="http://reactjscode.com:3000/">Login</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
