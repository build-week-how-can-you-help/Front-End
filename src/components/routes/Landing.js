import React from 'react';
import Search from '../shared/Search';

function Landing({ linkToResults, setUserQuery }) {
    return (
        <div className="centered-content">
            <h1>What kind of Non-Profit are You Looking For?</h1>
            <Search redirect linkToResults={linkToResults} setUserQuery={setUserQuery} />
        </div>
    );
}

export default Landing;
