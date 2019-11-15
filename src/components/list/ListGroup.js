import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.div`
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap; 
        &.row {
          flex-direction: row;
        }        
        &.column {
          flex-direction: column;
        }
    `;

const ListGroup = ({
    tag, direction, children ,
}) =>{

    return (
        <List  as={tag}  className={direction}>
            {children}
        </List>
    );
};

ListGroup.propTypes = {
    tag: PropTypes.string,
    className: PropTypes.string,
    direction: PropTypes.string,
    children: PropTypes.node,
};

ListGroup.default = {
    tag: '',
    className: '',
    direction: 'row',
    children: null,
};

export default ListGroup;