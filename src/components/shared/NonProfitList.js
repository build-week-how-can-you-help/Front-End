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
            <div className="for-testing">
                <p style={{ fontSize: '1.3rem', color: 'red' }}>For testing purposes only</p>
                <p style={{ color: 'red', marginBottom: '20px' }}>
                    The users query was: <span style={{ color: '#000' }}>{userQuery}</span>
                </p>
            </div>
            {nonProfits.map(nonProfit => (
                <NonProfit key={nonProfit.id} nonProfit={nonProfit} />
            ))}
        </div>
    );
}

export default NonProfitList;
