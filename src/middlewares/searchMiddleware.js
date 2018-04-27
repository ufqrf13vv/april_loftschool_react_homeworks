import { getSeriesRequest, getSeriesSuccess, getSeriesFailure } from '../actions/search';
import { search } from '../api';

/**
 *
 * @param action.type
 *  @result promise
 */
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