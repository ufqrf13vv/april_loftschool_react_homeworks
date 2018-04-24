import React, { Component } from 'react';

export default class ShowActor extends Component {

    render() {
        const { name, birthday, image, url } = this.props;

        return (
            <div className="show-page__actor">
                <p>{name}</p>
                <img src={image} alt={name}/>
                <p>Дата рождения: {birthday ? birthday : 'Неизвестна'}</p>
                <a href={url}>Ссылка на сайт</a>
            </div>
        )
    }
}