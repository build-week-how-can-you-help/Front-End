import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import './App.scss';
import './reset.css';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import ResultsLayout from './components/routes/ResultsLayout';
import HomeLayout from './components/routes/HomeLayout';

function App() {
    const [userQuery, setUserQuery] = useState('');

    return (
        <div className="App">
            <Route exact path="/" render={props => <HomeLayout {...props} setUserQuery={setUserQuery} />} />
            <Route path="/results" render={props => <ResultsLayout {...props} userQuery={userQuery} setUserQuery={setUserQuery} />} />
        </div>
    );
}

export default App;
