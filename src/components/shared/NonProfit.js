import React from 'react';

function NonProfit({ nonProfit }) {
    const { name, website, address, phone, fax, description } = nonProfit;

    return (
        <div className="non-profit">
            <div className="details">
                <h2>{name}</h2>
                <ul>
                    <li>
                        <a href={website} target="_blank">
                            {website}
                        </a>
                    </li>
                    <li>{address}</li>
                    <li>
                        <a href={`tel:${phone}`}>{phone}</a>
                    </li>
                    <li>{fax}</li>
                </ul>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default NonProfit;
