import React from 'react';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="wrap">
                <div className="flex three-col">
                    <div>
                        <h3>Who We Are</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div>
                        <h3>Contact</h3>
                        <p>123 Fake St., Los Angeles, CA 90023</p>
                        <p>something@something.com</p>
                    </div>
                    <div>
                        <h3>About Us</h3>
                        <ul>
                            <li>Link 1</li>
                            <li>Link 2</li>
                            <li>Link 3</li>
                            <li>Link 4</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
