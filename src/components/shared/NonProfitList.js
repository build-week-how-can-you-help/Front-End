import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NonProfit from './NonProfit';

import { orgs } from '../../data.js';

function NonProfitList({ userQuery, userZip }) {
    const [nonProfits, setNonProfits] = useState([]);

    useEffect(() => {
        setNonProfits(orgs);
        console.log(userQuery);

        axios.get('https://projects.propublica.org/nonprofits/api/v2/search.json').then(res => {
            console.log(res);
        });
    }, [userQuery]);

    return (
        <div className="non-profit-list">
            <div className="for-testing">
                <p style={{ fontSize: '1.3rem', color: 'red' }}>For testing purposes only</p>
                <p style={{ color: 'red', marginBottom: '20px' }}>
                    The users query was: <span style={{ color: '#000' }}>{userQuery}</span>
                </p>
                <p style={{ color: 'red', marginBottom: '20px' }}>
                    The users zip code was: <span style={{ color: '#000' }}>{userZip}</span>
                </p>
            </div>
            {nonProfits.map(nonProfit => (
                <NonProfit key={nonProfit.id} nonProfit={nonProfit} />
            ))}
        </div>
    );

    // , {
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Content-Type': 'application/json'
    //     },
    //     proxy: {
    //         host: '66.43.34.50',
    //         port: 8080
    //     }
    // }
}

export default NonProfitList;
