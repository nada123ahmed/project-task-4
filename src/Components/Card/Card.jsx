import React from 'react';
import './Card.css';

function Card({ title, description, icon, color }) {
    return (
        <div className="card" style={{ borderColor: color }}>
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={icon} alt={`${title} icon`} />
        </div>
    );
}

export default Card;