import styled from 'styled-components';

export const DestructuringContent = styled.div`
    width: 100%;
    float: right;
    height: 100vh;
    text-align: center;
    font-weight: bold;
    color: #FFFFFF;
    background-color: #282C35;
`;

export const DestructuringTitle = styled.h1`
    text-decoration: underline;
    text-decoration-color: #FF9900;
    font-weight: bold;
`;

export const DestructuringParagraph = styled.p`
  /* TO DO */
`

export const DestructuringIframe = styled.div`
    transform: scale(0.7);
    border: 0; 
    overflow: hidden;
    border-radius: 15px;
    
    & iframe {
        width: 100%;
        border: none;
    }
`;