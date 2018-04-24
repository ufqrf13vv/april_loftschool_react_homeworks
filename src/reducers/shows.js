import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { showSeriesRequest, showSeriesSuccess, showSeriesFailure } from '../actions/show';

const series = handleActions(
    {
        [showSeriesSuccess]: (state, action) => state.concat(action.payload)
    },
    []
);

const isLoading = handleActions(
    {
        [showSeriesRequest]: () => true,
        [showSeriesFailure]: () => false,
        [showSeriesSuccess]: () => false
    },
    false
);

const error = handleActions(
    {
        [showSeriesRequest]: () => null,
        [showSeriesFailure]: (state, action) => action.payload
    },
    null
);

export default combineReducers({
    series,
    isLoading,
    error
});