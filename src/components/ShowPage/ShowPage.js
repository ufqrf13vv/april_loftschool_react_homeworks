import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { showSeriesRequest } from '../../actions/show';
import { getIsLoading } from '../../reducers/shows';
import ShowActor from './ShowActor';
import './ShowPage.css';
import Loader from '../Loader';
import Error from '../Error';

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
                url={actor.person.url}/>
        });
    };

    render() {
        const { isLoading, error, series } = this.props;
        const length = series.length;

        if (!length) {
            return null;
        } else {
            const { name, image, summary, _embedded } = series[0];

            return (
                <div className="show-page">
                    <h3>{name}</h3>
                    <img src={image.medium} alt={name}/>
                    <div className="show-page__description" dangerouslySetInnerHTML={{__html: summary}}/>
                    <div className="show-page__actors t-person">
                        {this.actorsList(_embedded.cast)}
                    </div>
                    <Loader loading={isLoading} />
                    <Error isError={error} />
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    isLoading: getIsLoading(state),
    error: state.shows.error,
    series: state.shows.series
});

const mapDispatchToProps = {showSeriesRequest};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPage);