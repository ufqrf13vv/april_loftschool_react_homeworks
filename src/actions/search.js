import { createActions } from 'redux-actions';

const {
    search: {
        request: getSeriesRequest,
        success: getSeriesSuccess,
        failure: getSeriesFailure
        }
    } = createActions({
    SEARCH: {
        REQUEST: null,
        SUCCESS: null,
        FAILURE: null
    }
}, {
    namespace: '_'
});

export {
    getSeriesRequest,
    getSeriesSuccess,
    getSeriesFailure
};