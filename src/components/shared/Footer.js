import React from 'react';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="wrap">
                <div className="flex two-col">
                    <div>
                        <h3>Contact</h3>
                        <p>123 Fake St., Los Angeles, CA 90023</p>
                        <p>
                            <a href="#">something@something.com</a>
                        </p>
                    </div>
                    <div>
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
                </div>
            </div>
        </footer>
    );
}

export default Footer;
