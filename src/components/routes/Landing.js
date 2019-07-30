import React from 'react';
import Search from '../shared/Search';

function Landing({ history, setUserQuery }) {
    function linkToResults() {
        history.push('/results');
    }

    return (
        <div>
            <Search redirect linkToResults={linkToResults} setUserQuery={setUserQuery} />
        </div>
    );
}

export default Landing;
