import React from 'react';
import styled from 'styled-components';

export const AuthorsContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 405px;
    height: 155px;
    margin: 0 auto;
    background-color: #fff;
    margin-top: 100px;

    @media (max-width: 768px) {
        width: 90%;
        background-color: transparent;
        align-items: center;
        margin-top: 35px;
        flex-grow: 1;
        height: 0px;
    }
`;

export const AuthorsBox = styled.div`
    display: flex;
    height: 75%;
    max-width: 90%;
    margin: 0 auto;
    padding-top: 12px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        background: #fff;
    }
`;

export const AuthorsText = styled.p` 
    text-align: center;
    color: #000;
`;

export const AuthorsDescription = styled.p` 
    text-align: center;
    color: #000;
`;

export const AuthorsContentBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 110px;
`;

export const AuthorsImage = styled.img` 
    border-radius: 50%;
    width: 90px; 
    height: 84px;
`;

export const AuthorsGit = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #000;
    height: 100%;
    color: #000;

    @media (max-width: 768px) {
        width: 90%;
        background-color: #fff;
        margin-bottom: 45px;
    }
`;
