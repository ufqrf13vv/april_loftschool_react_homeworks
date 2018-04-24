import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import './AppRouter.css';
import Search from '../Search';
import ShowPage from '../ShowPage';

export default class AppRouter extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path='/' exact component={Search}/>
                    <Route path='/show/:id' component={ShowPage}/>
                </Switch>
            </div>
        )
    }
}