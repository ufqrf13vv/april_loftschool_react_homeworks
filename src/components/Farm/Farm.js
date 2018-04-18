import React, { Component } from 'react';
import './Farm.css';
import Order from '../Order';
import { moveOrderToCustomer } from '../../actions/farmActions';
import { connect } from 'react-redux';

export class Farm extends Component {

    handleMoveOrder = () => {
        const {orders} = this.props.state;

        this.props.moveOrderToCustomer(orders[0]);
    };

    orderList = () => {
        const orders = this.props.state.orders;

        return orders.map(item => {
            return <Order
                key={item.id}
                name={item.name}
                price={item.price}
                createdAt={item.createdAt}/>
        });
    };

    render() {
        return (
            <div className="farm">
                <h2>Производство на ферме</h2>
                <button onClick={this.handleMoveOrder}>Отправить урожай клиенту</button>
                <div>
                    {this.orderList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state: state.farm
});

const mapDispatchToProps = {
    moveOrderToCustomer
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Farm);
