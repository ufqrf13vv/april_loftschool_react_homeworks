import React, { Component } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    state = {
        email: '',
        password: '',
        isCorrect: false
    };

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleClick = () => {
        const {authorizeUser} = this.props;
        const {email, password} = this.state;
        const authorize = authorizeUser(email, password);

        this.setState({isCorrect: !authorize});
    };

    render() {
        const {isAuthorized} = this.props;
        const {isCorrect} = this.state;

        if (isAuthorized) {
            return <Redirect to="/"/>
        }

        return (
            <div>
                <div>
                    <input
                        type="text"
                        name="email"
                        onChange={this.handleChange}/>
                    <input
                        type="password"
                        name="password"
                        onChange={this.handleChange}/>
                    {isCorrect
                        ? <p className="error">Неверный логин и/или пароль</p>
                        : null
                    }
                </div>
                <button onClick={this.handleClick}>Войти</button>
            </div>
        );
    }
}

export default AuthHOC(Login);
