import React, {Component} from 'react';

class CardNumberInput extends Component {
    state = {
        number: ''
    };

    format = number => {
        if (!number) return '';

        let result = Array.from('' + number).map((item, idx) => {
            return (idx % 4 || 0 === idx) ? item : ' ' + item
        }).join('');

        return result;
    };

    normalize = number => {
        return number.replace(/\s/g, '').trim();
    };

    handleChange = event => {
        const {onChange} = this.props;
        const {value} = event.target;

        onChange(this.normalize(value));
    };

    componentWillReceiveProps(nextProps) {
        const {cardNumber} = nextProps;

        this.setState({number: this.format(cardNumber)})
    };

    componentDidMount() {
        const {cardNumber} = this.props;

        this.setState({number: this.format(cardNumber)})
    };

    render() {
        const {number} = this.state;

        return <input
            type="text"
            onChange={this.handleChange}
            value={number} />
    }
}

export default CardNumberInput;
