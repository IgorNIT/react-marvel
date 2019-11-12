import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';


const CardContainer = styled.div`
    border-radius: 10px;
    overflow: hidden;
    background: #ffffff;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.30);
    transition: all 0.5s ease;
    margin-bottom: 30px;
    &:hover {
        box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.60);
    } 
`;

const CardImage = styled.img`
    display: block;
    object-fit: cover;
    height: 300px;    
`;

const CardInfo = styled.div`
    padding: 25px 10px;    
`;

const CardTitle = styled.a`
    font-size: 18px;
    color: #000000;
    font-weight: 700;
    transition: all 0.5s;
`;

const  Card = ({
   image , link,  title
}) => {

    return (
        <CardContainer href={link}>
            <CardImage src={image} alt={title}/>
            <CardInfo>
                <CardTitle>{title}</CardTitle>
            </CardInfo>
        </CardContainer>
    );
};

Card.prototTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string
};

export  default Card;