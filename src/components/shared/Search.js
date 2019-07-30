import React from 'react';

function Search() {
    return (
        <div className="search-form">
            <form>
                <input type="text" placeholder="What are you looking for?" />
                <button>New Search</button>
            </form>
        </div>
    );
}

export default Search;
