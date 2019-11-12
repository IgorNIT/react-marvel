import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const Title = ({
    children, tag, align, underline,  className,
}) => {

    const Tag = tag;

    const classes = classNames(
        'title',
         underline ? 'title--underline' : '',
        `align-${align}`,
        className
    );

    return (
        <Tag
            className={classes}
        >
            {children}
        </Tag>
    );
};

Title.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.string,
    align: PropTypes.string,
    underline: PropTypes.bool,
};

Title.defaultProps = {
    children: 'Default title',
    className: '',
    tag: 'h2',
    align: 'left',
    underline: true
};

export default  Title;