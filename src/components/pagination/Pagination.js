import React from "react";
import { NavLink } from 'react-router-dom'


import { MdArrowForward } from 'react-icons/md';
import { MdArrowBack } from "react-icons/md";



import styled from 'styled-components';

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
    background: #ffffff;
    color: #ff4444;     
    border: 1px solid #dedada;
    border-radius: 3px;
    width: 50px;
    height: 50px;
    text-align: center;
    display: felex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin: 0 5px;
`;



const  Pagination = ()=>{
    return(
        <PaginationList>
            <PaginationItem>
                <MdArrowBack/>
            </PaginationItem>
            <PaginationItem>
                <MdArrowForward />
            </PaginationItem>
        </PaginationList>

    );
};


export default  Pagination;