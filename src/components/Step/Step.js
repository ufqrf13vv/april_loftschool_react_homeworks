import React, { Component } from 'react';
import './Step.css';
import classNames from 'classnames/bind';

export default class Step extends Component {
    render() {
        const {number, isSelected, isClickable} = this.props;
        let stepClasses = classNames('step', {
            'step-selected': isSelected,
            'step-clickable': isClickable
        });

        return (
            <div className={stepClasses} onClick={this.handleClick}>
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