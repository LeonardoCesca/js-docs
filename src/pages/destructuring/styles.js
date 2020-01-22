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
    }
`;