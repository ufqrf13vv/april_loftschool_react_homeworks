import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { getSeriesRequest, getSeriesSuccess, getSeriesFailure } from '../actions/search';

const series = handleActions(
    {
        [getSeriesSuccess]: (state, action) => state.concat(action.payload)
    },
    []
);

const isLoading = handleActions(
    {
        [getSeriesRequest]: () => true,
        [getSeriesFailure]: () => false,
        [getSeriesSuccess]: () => false
    },
    false
);

const error = handleActions(
    {
        [getSeriesRequest]: () => null,
        [getSeriesFailure]: (state, action) => action.payload
    },
    null
);

export default combineReducers({
    series,
    isLoading,
    error
});

export const getIsLoading = state => state.search.isLoading;