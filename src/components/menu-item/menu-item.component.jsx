import React from 'react';

import './menu-item.styles.scss';


const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div
        style={{
            backgroundImage: `url(${imageUrl})`
        }} className="background-image"></div>
        <div className="content">
            <h1 className="title">{ title }</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
)

export default MenuItem;