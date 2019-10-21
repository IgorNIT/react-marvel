import React from "react";
import styled from 'styled-components';





const NumberWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 20px;
`;

const NumberCurrent = styled.span``;

const NumberList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const NumberItem = styled.li`
   
    padding: 5px;
    background: #ffffff;
    color: #ff4444;        
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



const  PaginationNumber = ()=>{

    return(
        <NumberWrapper>
            <span>Items per page:</span>
            <div>
                <span>25</span>
                <NumberList>
                    <NumberItem>50</NumberItem>
                    <NumberItem>75</NumberItem>
                    <NumberItem>100</NumberItem>
                </NumberList>
            </div>
        </NumberWrapper>

    );
};


export default  PaginationNumber;