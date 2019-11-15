import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


import { MdArrowForward } from 'react-icons/md';
import { MdArrowBack } from "react-icons/md";



import styled from 'styled-components';
import Card from "../card/Card";
import ListGroupItem from "../list/ListGroupItem";

const PaginationList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const PaginationItem = styled.li`
    font-size: 20px;
    padding: 5px;
    background: var(--main-white);
    color: var(--main-red);     
    border: 1px solid var(--border-light);
    border-radius: 3px;
    width: 50px;
    height: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: 0 5px;
    cursor: pointer;
    transition: all .5s ease;
    &:hover {
        background-color: var(--main-red);
        color: var(--main-white);   
    }
`;



const  Pagination = ({
    offset , link
})=>{
    const linkClassLeft = offset !== 0 ? '' : 'disabled';

    return(
        <PaginationList>
            <PaginationItem>
                <Link to={link} className={linkClassLeft}>
                <MdArrowBack/>
                </Link>
            </PaginationItem>
            <PaginationItem>
                <MdArrowForward />
            </PaginationItem>
        </PaginationList>

    );
};


Pagination.prototTypes = {
    offset: PropTypes.number,
    link: PropTypes.string
};

Pagination.default = {
    offset: 0,
    link: '',
};

export default  Pagination;