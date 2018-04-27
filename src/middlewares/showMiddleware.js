import { showSeriesRequest, showSeriesSuccess, showSeriesFailure } from '../actions/show';
import { show } from '../api';

/**
 *
  * @param action.type
 *  @result promise
 */
const showMiddleware = store => next => action => {

    if (action.type === showSeriesRequest.toString()) {
        show(action.payload)
            .then(series => {
                store.dispatch(showSeriesSuccess(series));
            })
            .catch(error => {
                store.dispatch(showSeriesFailure(error));
            });
    }

    return next(action);
};

export default showMiddleware;