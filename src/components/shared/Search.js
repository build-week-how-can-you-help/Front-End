import React, { useState } from 'react';

function Search({ redirect, linkToResults, setUserQuery, setUserZip }) {
    const [userInput, setUserInput] = useState('');
    const [zipInput, setZipInput] = useState('');

    function handleInput(e) {
        setUserInput(e.target.value);
    }

    function handleZipInput(e) {
        let zipVal = e.target.value.replace(/[^0-9]/g, '');

        if (zipVal.length <= 5) {
            setZipInput(zipVal);
        }
    }

    function handleClick(e) {
        e.preventDefault();

        setUserQuery(userInput);
        setUserZip(zipInput);

        if (redirect) {
            linkToResults();
        }
    }

    return (
        <div className="search-form">
            <form>
                <label>
                    <span>Search Term:</span>
                    <input type="text" placeholder="What are you looking for?" value={userInput} onChange={e => handleInput(e)} />
                </label>
                <label>
                    <span>Zip Code:</span>
                    <input type="text" placeholder="Zip Code" value={zipInput} onChange={e => handleZipInput(e)} />
                </label>
                <button onClick={e => handleClick(e)}>Find Non-Profit</button>
            </form>
        </div>
    );
}

export default Search;
