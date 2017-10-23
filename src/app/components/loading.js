import React from 'react';

import SVGInline from 'react-svg-inline';
import LoadingIcon from '../../icons/loading.svg';

const Loading = () => {
    return (
        <div>
            <SVGInline svg={ LoadingIcon } />
        </div>
    );
};

Loading.propTypes = {};

export default Loading;
