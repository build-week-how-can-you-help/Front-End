import React from 'react';

import Header from '../shared/Header';
import Footer from '../shared/Footer';
import Results from './Results';

function ResultsLayout(props) {
    const { setUserQuery } = props;
    return (
        <div className="results">
            <Header setUserQuery={setUserQuery} />
            <main className="main-content">
                <div className="wrap">
                    <Results {...props} />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default ResultsLayout;
