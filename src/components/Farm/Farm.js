import React, { Component } from 'react';
import './Farm.css';

export class Farm extends Component {

    handleClick = () => {
        console.log(this)
    };

    render() {
        return (
            <div className="farm">
                <h2>Производство на ферме</h2>
                <button onClick={this.handleClick}>Отправить урожай клиенту</button>
                <div></div>
            </div>
        )
    }
}

export default Farm;
