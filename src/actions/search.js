import { createActions } from 'redux-actions';

const {
    series: {
        request: getSeriesRequest,
        success: getSeriesSuccess,
        failure: getSeriesFailure
        }
    } = createActions({
    SERIES: {
        REQUEST: null,
        SUCCESS: null,
        FAILURE: null
    }
});

export {
    getSeriesRequest,
    getSeriesSuccess,
    getSeriesFailure
};