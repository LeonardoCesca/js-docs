import styled from 'styled-components';

export const DestructuringContent = styled.div`
    width: 100%;
    float: right;
    height: 100vh;
    text-align: center;
`;

export const DestructuringTitle = styled.h1`
    font-weight: bold;
`;

export const Iframe = styled.div`
    transform:scale(0.7);
    border:0; 
    overflow:hidden;

    & iframe {
        width: 100%;
        border: none;
    }
`; 