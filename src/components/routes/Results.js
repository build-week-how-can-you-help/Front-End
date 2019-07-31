import React from 'react';

import NonProfitList from '../shared/NonProfitList';
import Search from '../shared/Search';

function Results({ userQuery, userZip, setUserQuery, setUserZip }) {
    return (
        <div>
            <Search setUserQuery={setUserQuery} setUserZip={setUserZip} />
            <NonProfitList userQuery={userQuery} userZip={userZip} />
        </div>
    );
}

export default Results;
