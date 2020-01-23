import styled from 'styled-components';

export const DestructuringContent = styled.div`
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

export const DestructuringTitle = styled.h1`
    text-decoration: underline;
    text-decoration-color: #FF9900;
    font-weight: bold;

    @media (max-width: 768px) {
        padding-top: 26px;
    }
`;

export const DestructuringParagraph = styled.p`
    margin: 0 13px 18px 13px;
`

export const DestructuringIframe = styled.div`
    width: 45%;
    border: 0; 
    margin: 0 auto;
    overflow: hidden;
    border-radius: 15px;

    @media (max-width: 768px) {
      width: 100%;
    }
    
    & iframe {
        width: 100%;
        height: 285px;
        border: none;

        @media (max-width: 768px) {
            width: 90%;
        }
    }
`;

export const DestructuringLinks = styled.div`
    padding: 10px 0 10px 0;

    & a {
        color: #fff;
        text-decoration: none;
        font-style: italic;                
    }
`;