import React, { Component } from 'react';
import './Step.css';

export default class Step extends Component {
    render() {
        const {number, isSelected, isClickable} = this.props;
        let stepClasses = ['step'];

        if (isSelected) {
            stepClasses.push('step-selected');
        }

        if (isClickable) {
            stepClasses.push('step-clickable');
        }

        return (
            <div className={stepClasses.join(' ')} onClick={this.handleClick}>
                <div className="step__number">{number}</div>
                <div className="step__title">{this.props.children}</div>
            </div>
        )
    }

    handleClick = () => {
        if (this.props.isClickable) {
            this.props.onClick(this.props.number);
        }
    };

};