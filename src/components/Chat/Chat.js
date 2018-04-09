import React, { Component } from 'react';
import './Chat.css';
import Message from '../Message/Message';

export default class Chat extends Component {
    state = {
        messageInput: '',
        messages: []
    };

    changeInputMessage = (event) => {
        this.setState({messageInput: event.target.value});
    };

    sendMessageOnEnter = (event) => {
        const {messageInput, messages} = this.state;

        if (event.key === 'Enter') {
            this.setState({
                messageInput: '',
                messages: [...messages, {text: messageInput}]
            });
        }
    };

    render() {
        const {messageInput, messages} = this.state;

        return (
            <div className="chat">
                <div className="message-list">
                    {messages.map((el, idx) => <Message key={idx} text={el.text}/>)}
                </div>
                <input className="input-message" type="text"
                    onChange={this.changeInputMessage}
                    onKeyPress={this.sendMessageOnEnter}
                    value={messageInput}/>
            </div>
        );
    }
}