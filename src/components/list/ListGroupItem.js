import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListGroup from "./ListGroup";


const Item = styled.span`
  position: relative;
  list-style-type: none;
  display: inline-flex;
  padding: 5px 5px;
`;

const  ListGroupItem = ({
    tag , children
}) => {

    return (
        <Item  as={tag}>
            {children}
        </Item>
    );
}

ListGroupItem.propTypes = {
    tag: PropTypes.string,
    children: PropTypes.node,
};

ListGroupItem.default = {
    tag: '',
    children: null,
};

export default ListGroupItem;