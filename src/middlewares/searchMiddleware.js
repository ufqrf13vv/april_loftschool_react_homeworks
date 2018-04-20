import { getSeriesRequest, getSeriesSuccess, getSeriesFailure } from '../actions/search';
import { search } from '../api';

const searchMiddleware = store => next => action => {

    if (action.type === getSeriesRequest.toString()) {
        search(action.payload)
            .then(series => {
                store.dispatch(getSeriesSuccess(series));
            })
            .catch(error => {
                store.dispatch(getSeriesFailure(error));
            });
    }

    return next(action);
};

export default searchMiddleware;