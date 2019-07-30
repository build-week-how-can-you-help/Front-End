import React from 'react';
import NonProfitList from '../shared/NonProfitList';

function Results({ nonProfits }) {
    return (
        <div>
            <NonProfitList nonProfits={nonProfits} />
        </div>
    );
}

export default Results;
