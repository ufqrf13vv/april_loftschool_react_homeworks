import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSeriesRequest, getSeriesSuccess, getSeriesFailure } from '../../actions/search';
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

    render() {
        const { series, isLoading, error } = this.props;

        return (
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
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.search.isLoading,
    error: state.search.error,
    series: state.search.series
});

const mapDispatchToProps = { getSeriesRequest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);