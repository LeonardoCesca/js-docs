import styled from 'styled-components';

export const ContributorsBox = styled.div`
    background: #171717;
    width: 67%;
    height: 76%;
    margin: 0 auto;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        width: 90%;
        height: 80%;
        padding-bottom: 35px;
    }
`;

export const ContributorsContainer = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 85%;
    height: 70%;
    background-color: #282C35;
    margin: 0 auto;
    overflow-y: auto;
    margin-bottom: 20px;

    ::-webkit-scrollbar {
      padding: 10px 0;
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: rgb(40, 44, 53);
      border-radius: 20px;
    }
    ::-webkit-scrollbar-thumb {
      background: rgb(255, 153, 0);
      border-radius: 20px;
    }

    & a {
        text-decoration: none;
        color:#000;
        display: flex;
        justify-content: center;

        & svg {
            padding: 9px;
            color: #fff;
        }
    }

    & img {
        border-radius: 50%;
        width: 120px;
        height: 120px;
    }
`;

export const ContributorsTitle = styled.p`
    padding-top: 30px;
    font-size: 24px;
`;

export const Author = styled.span`
    display: block;
    color: #efe0e0;
    padding-top: 7px;
`;

export const Box = styled.span`
    margin: 35px;
`;

export const Links = styled.div`
    display: flex;
    justify-content: center;
`;
