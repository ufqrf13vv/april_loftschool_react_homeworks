import React, { Component } from 'react';
import './PersonalForm.css';
import Title from '../Title/Title';

export default class CardForm extends Component {
    render() {
        const {firstName, lastName, email} = this.props;

        return (
            <div>
                <Title text="Персональная информация"/>
                <div className="personal-form" data-test="personal-form">
                    <input type="text" name="firstName" onChange={this.handleChangeForm} value={firstName} placeholder="Ваше имя" />
                    <input type="text" name="lastName" onChange={this.handleChangeForm} value={lastName} placeholder="Ваша фамилия" />
                    <input type="text" name="email" onChange={this.handleChangeForm} value={email} placeholder="Email" />
                </div>
            </div>
        )
    }

    handleChangeForm = (event) => {
        this.props.onChangeForm(event.target.name, event.target.value);
    };
};