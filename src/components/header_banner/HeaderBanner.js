import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container'
import styled from 'styled-components';
import classNames from 'classnames';


const Banner = styled.div`      
    margin-bottom: 40px;   
`;

const BannerPlaceholder = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 30px 0;
`;

const BannerTitle = styled.h1`
    width: 100%;
    margin: 0;
    color: var(--main-white);
    font-size: 40px;
`;

const HeaderBanner = ({
    image, height, title, className , children, ...attrs
}) => {

    const  styleHeight= {
        minHeight: height  + 'px',
    };

    const  styleBackground= {
        background: 'url(' + image + ') no-repeat center',
        backgroundSize: 'cover',
    };

    const classes = classNames(
        'header-banner'
    );

    return (
    <Banner
        className={classes}
        {...attrs}
        style={styleBackground}
    >
        <Container>
            <BannerPlaceholder
                className={'header-banner__placeholder'}
                style={styleHeight}
            >
                <BannerTitle>{title}</BannerTitle>
                {children}
            </BannerPlaceholder>
        </Container>
    </Banner>
    );
};

HeaderBanner.propTypes = {
    children: PropTypes.node,
    height: PropTypes.number,
    title: PropTypes.string,
    className: PropTypes.string,
};

HeaderBanner.defaultProps = {
    children: '',
    height: 300,
    title: '',
    className: '',
};

export default HeaderBanner;