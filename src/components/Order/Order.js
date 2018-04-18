import React from 'react';
import './Order.css';

function formatDate(date) {
    return `${('0' + date.getDate()).slice(-2)}.
            ${('0' + (date.getMonth() + 1)).slice(-2)}.
            ${date.getFullYear()} ${('0' + date.getHours()).slice(-2)}:
            ${('0' + date.getMinutes()).slice(-2)}`;
}

const Order = ({ name, price, createdAt }) => (
    <div className="order">
        <div className="order__upper">
            <p className="p--order">Название: {name}</p>
            <p className="p--order">Цена: {price}</p>
        </div>
        <div className="order__lower">
            <p className="p--order">Создан: {formatDate(createdAt)}</p>
        </div>
    </div>
);

export default Order;
