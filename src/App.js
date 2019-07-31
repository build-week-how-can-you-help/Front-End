import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import './reset.css';
import './App.scss';

import ResultsLayout from './components/routes/ResultsLayout';
import HomeLayout from './components/routes/HomeLayout';

function App() {
    const [userQuery, setUserQuery] = useState('');
    const [userZip, setUserZip] = useState('');

    return (
        <div className="App">
            <Route exact path="/" render={props => <HomeLayout {...props} setUserQuery={setUserQuery} setUserZip={setUserZip} />} />
            <Route path="/results" render={props => <ResultsLayout {...props} userQuery={userQuery} setUserQuery={setUserQuery} userZip={userZip} setUserZip={setUserZip} />} />
        </div>
    );
}

export default App;
