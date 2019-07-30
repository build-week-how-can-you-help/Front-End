import React from 'react';
import NonProfitList from '../shared/NonProfitList';

function Results({ userQuery }) {
    return (
        <div>
            <NonProfitList userQuery={userQuery} />
        </div>
    );
}

export default Results;
