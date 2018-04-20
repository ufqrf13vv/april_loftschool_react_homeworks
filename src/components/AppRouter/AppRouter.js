import React, { Component } from 'react';
import './AppRouter.css';
import Search from '../Search';
import ShowPage from '../ShowPage';
import ShowPreview from '../ShowPreview';

export default class AppRouter extends Component {
    render() {
        return (
            <div className="App">
                <Search />
                <ShowPage />
                <ShowPreview />
            </div>
        )
    }
}