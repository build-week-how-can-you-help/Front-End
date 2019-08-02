import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NonProfit from './NonProfit';

// import { orgs } from '../../data.js';

function NonProfitList({ userQuery, userZip }) {
    const [nonProfits, setNonProfits] = useState([]);

    useEffect(() => {
        let search = `description_text=${userQuery}`;

        axios
            .post('//50.62.56.186:8000/find', search, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Accept: 'text/html; charset=utf-8'
                }
            })
            .then(res => {
                let arrayified = [];

                for (let key in res.data) {
                    arrayified.push(res.data[key]);
                }

                console.log(`Response for the query '${userQuery}' was:`, arrayified);

                setNonProfits(arrayified);
            })
            .catch(err => console.log('There was an error:', err));
    }, [userQuery]);

    let searchResults;

    if (!nonProfits.length) {
        searchResults = 'Non-profits are loading...';
    } else {
        searchResults = nonProfits.map((nonProfit, index) => <NonProfit key={index} nonProfit={nonProfit} />);
    }

    return (
        <div className="non-profit-list">
            <div className="full-list">{searchResults}</div>
        </div>
    );
}

export default NonProfitList;
