import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';


const itemsToShow =  [25, 50, 75, 100];

const  transition = 600;

const NumberWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 20px;
    white-space: nowrap;
    color: var(--main-red); 
    background: var(--main-white);
    line-height: 50px;
    user-select: none;
    position: relative;
    &>span {
        padding: 0 15px;
        border: 1px solid var(--border-light);
        border-radius: 3px;
        cursor: pointer;
    }
`;

const NumberList = styled.ul`    
    flex-wrap: wrap;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    right: 0;
    top: 100%;
    background-color: var(--main-white);
    border: 1px solid var(--border-light);
    border-radius: 3px;
    display: none;
    transition: opacity ${transition}ms;
    
    &.enter {
      display: flex;
      opacity: 0;
    }
    &.enter-active {
      opacity: 1;     
    }    
    &.enter-done {
      display: flex;  
    }    
    &.exit {
      opacity: 1;
      display: flex;  
    }
    &.exit-active {
      opacity: 0;     
    }    
    
`;

const NumberItem = styled.li`   
    padding: 5px  3px;
    min-width: 50px;
    height: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    transition: all .5s ease;
    &:hover {
        background-color: var(--main-red);
        color: #fff;
    }   
`;

const PaginationNumber = () => {

    const [pages, setPages] = useState(25);
    const [hover, setHover] = useState(false);

    return (
        <NumberWrapper
            onMouseEnter={ () => setHover(true)}
            onMouseLeave={ () => setHover(false)}
        >
            <span >Items to Show : {pages}</span>
            <CSSTransition in={hover} timeout={transition/2}>
            <NumberList>
                {itemsToShow.map( value  => (
                    <NumberItem
                        key={value}
                        onClick={ () => { setPages(value); setHover(false);}  }
                    >{value}
                    </NumberItem>
                ))}
            </NumberList>
            </CSSTransition>
        </NumberWrapper>
    );
};

export default  PaginationNumber;