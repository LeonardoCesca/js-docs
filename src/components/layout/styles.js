import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const ContainerMenu = styled.aside`
    width: 20%;
    background-color: #282C35;
    border-right: 2px solid #FF9900;
    padding-top: 50px;
    height: calc(100vh - 119px);
    overflow: auto;

    & a {
        text-decoration: none;
        width: 100%;
        display: flex;
        justify-content: center;
        letter-spacing: 0.1em;
        text-decoration: none;
    }
`;

export const ContainerLink = styled.div`
    display: flex;
`;

export const Container = styled.div`
    display: flex;
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
`;
