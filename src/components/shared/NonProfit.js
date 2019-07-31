import React from 'react';

function NonProfit({ nonProfit }) {
    const { name, website, address, phone, fax, description } = nonProfit;

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
                    <li>{address}</li>
                    <li>
                        Phone: <a href={`tel:${phone}`}>{phone}</a>
                    </li>
                    <li>Fax: {fax}</li>
                </ul>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default NonProfit;
