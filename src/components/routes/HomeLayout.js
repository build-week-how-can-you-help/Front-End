import React from 'react';

import Footer from '../shared/Footer';
import Landing from './Landing';

function HomeLayout({ history, setUserQuery }) {
    function linkToResults() {
        history.push('/results');
    }

    return (
        <div className="home">
            <main className="main-content">
                <Landing setUserQuery={setUserQuery} linkToResults={linkToResults} />
            </main>
            <Footer />
        </div>
    );
}

export default HomeLayout;
