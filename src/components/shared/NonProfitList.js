import React, { useState, useEffect } from 'react';
import NonProfit from './NonProfit';

import { orgs } from '../../data.js';

function NonProfitList({ userQuery }) {
    const [nonProfits, setNonProfits] = useState([]);

    useEffect(() => {
        setNonProfits(orgs);
        console.log(userQuery);
    }, [userQuery]);

    return (
        <div className="non-profit-list">
            <div>
                <p>The users query was: {userQuery}</p>
            </div>
            {nonProfits.map(nonProfit => (
                <NonProfit key={nonProfit.id} nonProfit={nonProfit} />
            ))}
        </div>
    );
}

export default NonProfitList;
