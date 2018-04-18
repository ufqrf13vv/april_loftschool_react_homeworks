import React, { Component } from 'react';
import './Market.css';
import Order from '../Order';
import { createOrder, moveOrderToFarm } from '../../actions/marketActions';
import { connect } from 'react-redux';

let id = 0;

const getId = () => {
    id += 1;
    return id;
};

export const vegetables = [
    'Капуста',
    'Редиска',
    'Огурцы',
    'Морковь',
    'Горох',
    'Баклажан',
    'Тыква',
    'Чеснок',
    'Лук',
    'Перец',
    'Картофель',
    'Редька'
];

const getNewOrder = () => {
    return {
        id: getId(),
        name: vegetables[Math.floor(Math.random() * vegetables.length)],
        price: 100 + Math.floor(Math.random() * 100),
        createdAt: new Date()
    };
};

class Market extends Component {

    newOrder = () => {
        this.props.createOrder(getNewOrder());
    };

    ordersToFarm = () => {
        this.props.moveOrderToFarm();
    };

    orderList = () => {
        const orders = this.props.state.orders;

        orders.map(item => {
            <Order
                key={item.id}
                name={item.name}
                price={item.price}
                createdAt={item.createdAt} />
        });
    };

    render() {
        const { deliveryExpanse, profit, farmExpanse } = this.props.state;

        return (
            <div className="market">
                <h2>Новые заказы в магазине</h2>
                <button className="new-orders__create-button" onClick={this.newOrder}>Создать заказ</button>
                <button disabled>Отправить заказ на ферму</button>
                <div className="order-list">{this.orderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state: state.market
});

const mapDispatchToProps = {
    createOrder,
    moveOrderToFarm
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Market);
