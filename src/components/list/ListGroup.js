import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;

const ListGroup = ({
    tag, children
}) =>{
    return (
        <List
         as={tag}
        >
            {children}
        </List>

    );
};

ListGroup.propTypes = {
    children: PropTypes.node,
    tag: PropTypes.string
};

ListGroup.default = {
    children: null,
    tag: ''
};

export default ListGroup;