import React from 'react';

import Header from '../shared/Header';
import Footer from '../shared/Footer';
import Results from './Results';

function ResultsLayout(props) {
    const { setUserQuery, setUserZip } = props;
    return (
        <div className="results">
            <Header setUserQuery={setUserQuery} setUserZip={setUserZip} />
            <main className="main-content">
                <div className="wrap">
                    <Results {...props} setUserQuery={setUserQuery} setUserZip={setUserZip} />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default ResultsLayout;
