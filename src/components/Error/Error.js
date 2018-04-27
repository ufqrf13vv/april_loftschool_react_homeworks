import React, { Fragment } from 'react';

const Error = ({isError}) => {

    return (
        <Fragment>
            {isError && <p className="search__error">Произошла ошибка!!!</p>}
        </Fragment>
    )
};

export default Error;