import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './ShowPreview.css';

export default class ShowPreview extends Component {

    render() {
        const {id, name, summary, image} = this.props;

        return (
            <div className="preview t-preview">
                <Link to={`/show/${id}`} className="t-link preview__link">
                    <h3>{name}</h3>
                </Link>
                <div className="preview__image">
                    {image && <img src={image} alt={name} />}
                </div>
                <div className="preview__description" dangerouslySetInnerHTML={{__html: summary}} />
            </div>
        )
    }
}