import React from 'react';

import Footer from '../shared/Footer';
import Landing from './Landing';

function HomeLayout({ history, setUserQuery, setUserZip }) {
    function linkToResults() {
        history.push('/results');
    }

    return (
        <div className="home">
            <main className="main-content">
                <Landing setUserQuery={setUserQuery} setUserZip={setUserZip} linkToResults={linkToResults} />
            </main>
            <Footer />
        </div>
    );
}

export default HomeLayout;
