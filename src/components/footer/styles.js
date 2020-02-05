import styled from "styled-components"

export const FooterContent = styled.footer`
  position: fixed;
  bottom: 0;
  width: 16.67%;
  border-right: 2px solid #ff9900;
  background-color: rgb(40, 44, 53);
  border-top: 2px solid rgb(255, 153, 0);
  color: #fff;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const FooterText = styled.p`
  text-align: center;
  color: #fff;

  & a {
    margin-top: 15px;
    margin-bottom: 10px;
    color: #fff;
    font-weight: bold;

    &:last-child {
      margin-top: 21px;
    }
  }
`
