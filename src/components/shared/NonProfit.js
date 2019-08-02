import React from 'react';

function NonProfit({ nonProfit }) {
    const { name, website, address, city, description } = nonProfit;
    const zip = nonProfit['zip code'];

    return (
        <div className="non-profit">
            <div className="details">
                <h2>{name}</h2>
                <ul>
                    <li>
                        <a href={website} target="_blank" rel="noopener noreferrer">
                            {website}
                        </a>
                    </li>
                    <li>
                        {address}, {city}, MD {zip}
                    </li>
                </ul>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default NonProfit;
