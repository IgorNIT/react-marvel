import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';


const Banner = styled.div`
    height: 300px;
`;

const HeaderBanner = ({
    children, className , ...attrs
}) => {

    const classes = classNames(
        'header-banner'
    );

    return (
    <Banner
        className={classes}
        {...attrs}
    >
        {children}
    </Banner>
    );
};

HeaderBanner.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

HeaderBanner.defaultProps = {
    children: 'Default top banner',
    className: '',
};

export default HeaderBanner;