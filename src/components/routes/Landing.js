import React from 'react';
import Search from '../shared/Search';

function Landing({ linkToResults, setUserQuery }) {
    return (
        <div>
            <Search redirect linkToResults={linkToResults} setUserQuery={setUserQuery} />
        </div>
    );
}

export default Landing;
