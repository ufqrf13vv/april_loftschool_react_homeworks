import React, { Component } from 'react';
import './App.css';
import CardForm from '../CardForm/CardForm';
import PersonalForm from '../PersonalForm/PersonalForm';
import Step from '../Step/Step';

export default class App extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: ''
    };

    render() {
        return (
            <div className="container">
                <div className="tab-panel">{this.renderSteps()}</div>
                <div className="form-content">{this.renderForm()}</div>
                <div className="button-panel">
                    <button className="button-next"
                            onClick={this.handleClickNextForm}
                            disabled={!this.isFormCommitable()}>Next</button>
                </div>
            </div>
        )
    };

    handleClickNextForm = () => {
        this.setState({step: this.state.step + 1});
    };

    handleTabClick = (step) => {
        this.setState({step: step});
    };

    handleChangeForm = (firstArg, secondArg) => {
        this.setState({[firstArg]: secondArg});
    };

    handleChangeTimeOver = () => {
        //  Not used
    };

    isFormCommitable = () => {
        const {step, firstName, lastName, email, cardNumber} = this.state;

        if (step === 1) {
            if (firstName !== '' && lastName !== '' && email !== '' && email.includes('@')) {
                return true;
            }
        } else if (step === 2) {
            if (cardNumber.length === 16) {
                return true;
            }
        }

        return false;
    };

    renderForm = () => {
        const { step, firstName, lastName, email, cardNumber } = this.state;

        switch (step) {
            case 1:
                return  <PersonalForm firstName={firstName} lastName={lastName} email={email} onChangeForm={this.handleChangeForm} />;
            case 2:
                return <CardForm cardNumber={cardNumber} onChangeForm={this.handleChangeForm} onChangeTimeOver={this.handleChangeTimeOver} />;
            default:
                return <p data-test="congratulations">Поздравляем!</p>;
        }
    };

    renderSteps = () => {
        const {step} = this.state;

        return [
            <Step key="1" number={1} isClickable={step > 1} isSelected={step === 1} onClick={this.handleTabClick}>Personal information</Step>,
            <Step key="2" number={2} isClickable={step > 2} isSelected={step === 2} onClick={this.handleTabClick}>Card information</Step>,
            <Step key="3" number={3} isClickable={false} isSelected={step === 3} onClick={this.handleTabClick}>Finish</Step>
        ];
    };
};