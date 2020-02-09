import styled from "styled-components"

export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  font-weight: bold;
  color: #ffffff;
  background-color: #282c35;

  padding: 1rem;

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

  @media (max-width: 768px) {
    ::-webkit-scrollbar {
      padding: 10px 0;
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
      border-radius: 20px;
    }
    ::-webkit-scrollbar-thumb {
      background: transparent;
      border-radius: 20px;
    }
  }
`

export const Title = styled.h1`
  text-decoration: underline;
  text-decoration-color: #ff9900;
  font-weight: bold;
  margin-bottom: 0;
`

export const Paragraph = styled.p`
  padding: 26px 13px 18px 13px;

  margin: 0 auto;

  font-weight: 300;

  width: 100%;
  max-width: 600px;

  & a {
    text-decoration: none;
    color: rgb(255, 153, 0);
  }

  @media (max-width: 768px) {
    margin: 26px 13px 18px 13px;
    padding: 0;
  }
`

export const Links = styled.div`
  padding: 10px 0 10px 0;

  & a {
    color: #fff;
    text-decoration: none;
    font-style: italic;
  }
`

export const ContentInfos = styled.div`
  padding-bottom: 25px;

  @media (max-width: 768px) {
    padding-bottom: 70px;
  }
`
