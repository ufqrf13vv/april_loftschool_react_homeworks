import { Component } from 'react';
import ReactDOM from 'react-dom';

class Modal extends Component {
    render() {
        const { show, children } = this.props;
        const result = show ?
            ReactDOM.createPortal(children, document.getElementById('portal')) :
            null;

        return result;
    }
}

export default Modal;
