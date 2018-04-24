import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { showSeriesRequest } from '../../actions/show';
import ShowActor from './ShowActor';
import './ShowPage.css';

class ShowPage extends PureComponent {

    componentWillMount() {
        const { showSeriesRequest } = this.props;
        const { id } = this.props.match.params;

        showSeriesRequest(id);
    }

    actorsList = actors => {
        return actors.map(actor => {
            return <ShowActor
                key={actor.person.id}
                name={actor.person.name}
                birthday={actor.person.birthday}
                image={actor.person.image.medium}
                url={actor.person.url} />
        });
    };

    render() {
        const { isLoading, error, series } = this.props;
        const length = series.length;

        if (length) {
            return (
                <div className="show-page">
                    <h3>{series[0].name}</h3>
                    <img src={series[0].image.medium} alt={series[0].name}/>
                    <div className="show-page__description" dangerouslySetInnerHTML={{__html: series[0].summary}}/>
                    <div className="show-page__actors t-person">
                        {this.actorsList(series[0]._embedded.cast)}
                    </div>
                    {isLoading && <p>Данные загружаются...</p>}
                    {error && <p>Произошла ошибка!!!</p>}
                </div>
            )
        }

        return null;
    }
}

const mapStateToProps = state => ({
    isLoading: state.shows.isLoading,
    error: state.shows.error,
    series: state.shows.series
});

const mapDispatchToProps = {showSeriesRequest};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPage);