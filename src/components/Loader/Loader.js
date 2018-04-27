import React, { Fragment } from 'react';

const Loader = ({loading}) => {

    return (
        <Fragment>
            {loading && <p>Данные загружаются...</p>}
        </Fragment>
    )
};

export default Loader;