import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const ContainerMenu = styled.aside`
    width: 20%;
    height: calc(100vh - 195px);
    background-color: #282C35;
    border-right: 2px solid #FF9900;
    padding-top: 50px;
    padding-bottom: 20px;
    overflow: auto;

    ::-webkit-scrollbar {
      padding: 10px 0;
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: rgb(40, 44, 53);
      border-radius: 20px;
    }
    ::-webkit-scrollbar-thumb {
      background: rgb(255, 153, 0);;
      border-radius: 20px;
    }

    & a {
        text-decoration: none;
        width: 100%;
        display: flex;
        justify-content: center;
        letter-spacing: 0.1em;
        text-decoration: none;
        margin-bottom: 10px;
    }

    @media (max-width: 768px) {
      position: absolute;
      width: 100%;
      height: calc(100vh - 191px);
      background-color: #282C35;
      border-right: 2px solid #FF9900;
      padding-top: 50px;
      padding-bottom: 20px;
      overflow: auto;
    }
`;

export const Hamburger = styled.div`
    background: rgb(40, 44, 53) url("https://image.flaticon.com/icons/svg/660/660686.svg") no-repeat;
    background-size: 32px 57px;
    background-position: 10px top;
    width: 80px;
    height: 50px;
    cursor: pointer;

    @media (max-width: 768px) {
      width: 60px;
    }
`;

export const ContainerLink = styled.div`
    display: flex;
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
`;

export const ContainerContent = styled.div`
    display: flex;
    height: 100vh;
    overflow-y: scroll;
`;

export const StyledLink = styled(props => <Link {...props} />)`
  color: #FFFFFF;
  text-decoration: none;

  &:active {
    color: gray;
  }

  &:hover {
    color: #FF9900;
  }
`;

export const Title = styled.p`
    display: flex;
    justify-content: center;
    font-weight: bold;
    width: 100%;
    font-size: 18px;
    color: #FFFFFF;
    text-decoration: underline;
    text-decoration-color: #FF9900;
    text-align: center;
`;

export const CloseButton = styled.span`
    position: absolute;
    right: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    opacity: 0.3;
    background-color: #FFF;

    @media (max-width: 768px) {
      height: 32px;
      right: 10px;
      top: 10px;
    }

    &:hover {
      opacity: 1;
    }

    &:before, &:after {
      position: absolute;
      left: 15px;
      content: ' ';
      height: 33px;
      width: 2px;
      background-color: #333;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }

`;
