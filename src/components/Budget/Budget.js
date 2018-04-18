import React, { Component } from 'react';
import './Budget.css';

class Budget extends Component {
    state = {
        profit: 0,
        marketExpanse: 0,
        farmExpanse: 0,
        deliveryExpanse: 0
    };

    render() {
        return (
            <div className="budget">
                <h2>Бюджет</h2>
                <p>
                    Всего получено денег:
                    <span className="t-profit">{this.state.profit}</span>
                </p>
                <p>
                    Расходы продавцов:
                    <span className="t-sellers"></span>
                </p>
                <p>
                    Расходы на ферме:
                    <span className="t-farm"></span>
                </p>
                <p>
                    Расходы на доставку:
                    <span className="t-delivery"></span>
                </p>
                <p>
                    Итого:
                    <span className="t-total"></span>
                </p>
            </div>
        )
    }
}

export default Budget;
