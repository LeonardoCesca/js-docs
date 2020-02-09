import styled from "styled-components"

export const ContributorsBox = styled.div``

export const ContributorsContainer = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  background: #373c48;
  padding: 12px;
  border-radius: 5px;

  ::-webkit-scrollbar {
    padding: 10px 0;
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #373c48;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(255, 153, 0);
    border-radius: 20px;
  }

  & a {
    text-decoration: none;
    color: #000;
    display: flex;
    justify-content: center;

    padding: 12px;
    transition: all 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
    & svg {
      color: #fff;
    }
  }

  & img {
    border-radius: 50%;
    width: 120px;
    height: 120px;
  }
`

export const ContributorsTitle = styled.p`
  font-size: 24px;
  line-height: 34px;
  padding: 7px;
  color: #eeeeee;

  &::after {
    content: "";
    height: 7px;
    width: 5%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    background: #bd8f65;
  }
`

export const Author = styled.span`
  display: block;
  color: #efe0e0;
  padding-top: 7px;
`

export const Box = styled.span`
  margin: 8px;
  border: 2px solid rgba(255, 255, 255, 0.28);
  padding: 1.5rem;
  border-radius: 4px;
  transition: all 1s ease-out;
  &:hover {
    border: 2px solid rgb(255, 153, 0);
  }
  & img {
    object-fit: cover;
    object-position: center;
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: center;
`
