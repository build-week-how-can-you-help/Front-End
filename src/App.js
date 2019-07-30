import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import './App.scss';
import './reset.css';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Landing from './components/routes/Landing';
import Results from './components/routes/Results';

function App() {
    const [userQuery, setUserQuery] = useState('');

    return (
        <div className="App">
            <Header setUserQuery={setUserQuery} />
            <main className="main-content">
                <div className="wrap">
                    <Route exact path="/" render={props => <Landing {...props} setUserQuery={setUserQuery} />} />
                    <Route path="/results" render={props => <Results {...props} userQuery={userQuery} />} />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
