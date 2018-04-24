import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSeriesRequest } from '../../actions/search';
import ShowPreview from '../ShowPreview';
import './Search.css';

class Search extends Component {

    handleOnChange = event => {
        const { value } = event.target;

        this.setState({search: value});
    };

    handleSearch = () => {
        const { search } = this.state;

        this.props.getSeriesRequest(search);
    };

    orderList = series => {
        return series.map(item => {
            return <ShowPreview
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image.medium}
                summary={item.summary}/>
        });
    };

    render() {
        const { series, isLoading, error } = this.props;

        return (
            <div className="search__wrapper">
                <div className="search">
                    <input
                        className="search__input"
                        onChange={this.handleOnChange}
                        type="text" name="search"
                        placeholder="Название сериала"/>
                    <button
                        className="search__btn"
                        onClick={this.handleSearch}>Найти
                    </button>
                    {isLoading && <p>Данные загружаются...</p>}
                    {error && <p className="search__error">Произошла ошибка!!!</p>}
                </div>
                <div className="search__result t-search-result">
                    {this.orderList(series)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.search.isLoading,
    error: state.search.error,
    series: state.search.series
});

const mapDispatchToProps = {getSeriesRequest};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);