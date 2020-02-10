import styled from "styled-components"

export const FooterContent = styled.footer`
  width: 83%;
  padding: 1rem;
  border-top: 2px solid #ff9900;
  background-color: rgb(40, 44, 53);
  color: #fff;

  @media (max-width: 768px) {
    display: none;
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