import styled from 'styled-components';

export const DestructObjContent = styled.div`
    width: 100%;
    float: right;
    height: 100vh;
    text-align: center;
    font-weight: bold;
    color: #FFFFFF;
    background-color: #282C35;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const DestructObjTitle = styled.h1`
    text-decoration: underline;
    text-decoration-color: #FF9900;
    font-weight: bold;
`;