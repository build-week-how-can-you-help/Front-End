import React from 'react';
import NonProfit from './NonProfit';

function NonProfitList({ nonProfits }) {
    console.log(nonProfits);
    return (
        <div className="non-profit-list">
            {nonProfits.map(nonProfit => (
                <NonProfit key={nonProfit.id} nonProfit={nonProfit} />
            ))}{' '}
        </div>
    );
}

export default NonProfitList;
