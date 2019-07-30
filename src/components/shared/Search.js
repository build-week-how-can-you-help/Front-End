import React, { useState } from 'react';

function Search({ redirect, linkToResults, setUserQuery }) {
    const [userInput, setUserInput] = useState('');

    function handleInput(e) {
        setUserInput(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();

        setUserQuery(userInput);

        if (redirect) {
            linkToResults();
        }
    }

    return (
        <div className="search-form">
            <form>
                <input type="text" placeholder="What are you looking for?" value={userInput} onChange={e => handleInput(e)} />
                <button onClick={e => handleClick(e)}>Find Non-Profit</button>
            </form>
        </div>
    );
}

export default Search;
