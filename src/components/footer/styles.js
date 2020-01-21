import React from 'react';
import styled from 'styled-components';

export const FooterContent = styled.footer`
    position: fixed;
    bottom: 0;
    width: 16.7%;
    border-right: 2px solid #FF9900;
    background-color: #fff;
    color: #000;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const FooterText = styled.p` 
    text-align: center;

    & a {
        margin-top: 10px;
        margin-bottom: 5px;

        &:last-child {
            margin-top: 5px;
        }
    }
`;