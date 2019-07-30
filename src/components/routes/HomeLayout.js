import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import Landing from './Landing';

function HomeLayout({ history, setUserQuery }) {
    function linkToResults() {
        history.push('/results');
    }

    return (
        <div className="home">
            <main className="main-content">
                <div className="wrap">
                    <Landing setUserQuery={setUserQuery} linkToResults={linkToResults} />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default HomeLayout;
