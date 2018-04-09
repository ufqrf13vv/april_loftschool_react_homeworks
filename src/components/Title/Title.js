import React, { Component } from 'react';
import './Title.css';

export default class Title extends Component {
    render() {
        return <h1 className="title">{this.props.text}</h1>
    }
};