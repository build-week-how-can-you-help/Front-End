import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';
import './reset.css';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Landing from './components/routes/Landing';
import Results from './components/routes/Results';

import { orgs } from './data.js';

function App() {
    const [nonProfits, setNonProfits] = useState([]);

    useEffect(() => {
        setNonProfits(orgs);
    }, []);

    return (
        <div className="App">
            <Header />
            <main className="main-content">
                <div className="wrap">
                    <Switch>
                        <Route path="/" component={Landing} />
                        <Route path="/nonprofits" render={props => <Results {...props} nonProfits={orgs} />} />
                    </Switch>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
