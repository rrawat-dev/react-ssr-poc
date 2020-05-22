import React from 'react';
import StyledLoader from './Loader.style';

const Loader = (props) => {
    return (
        <StyledLoader {...props}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </StyledLoader>
    );
}

export default Loader;