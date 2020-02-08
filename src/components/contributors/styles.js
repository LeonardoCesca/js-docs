import styled from "styled-components"

export const ContributorsBox = styled.div`
  width: 100%;
  height: 55%;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
  
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`

export const ContributorsContainer = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 65%;
  height: 75%;
  margin: 0 auto;
  overflow-y: scroll;
  margin-bottom: 20px;
  background: #373c48;
  border-radius: 5px;
  padding: 20px 0 0;

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
  margin: 35px;
  border: 2px solid rgba(255,255,255,0.28);
  padding: 20px;
  border-radius: 4px;
  height: auto;
  margin-bottom: auto;
  transition: 1s ease-out;
  &:hover {
    border: 2px solid rgb(255, 153, 0);
  }
  & img {
    object-fit: cover;
  }
`

export const Links = styled.div`
  display: flex;
  justify-content: center;
`
