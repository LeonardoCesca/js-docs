import styled from "styled-components"

export const FooterContent = styled.footer`
  padding: 1rem;
  background-color: rgb(40, 44, 53);
  color: #fff;
  border-top: 2px solid rgb(255, 153, 0);
  width: 83%;
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
