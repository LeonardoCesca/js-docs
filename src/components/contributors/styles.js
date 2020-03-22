import styled, { keyframes, css } from "styled-components"

export const ContributorsBox = styled.div``

export const ContributorsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 250px));
  justify-content: center;
  margin: 0 auto;
  max-width: 900px;
  padding: 12px;
  border-radius: 5px;

  @media (max-width: 768px) {
    height: auto;
    overflow-y: unset;
  }

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
export const ContributorsTitleWrapper = styled.div`
  padding: 7px;
  display: flex;
  justify-content: center;
`
export const ContributorsTitle = styled.p`
  font-size: 24px;
  color: #eeeeee;
  position: relative;

  &::after {
    content: "";
    height: 7px;
    width: 7px;
    position: absolute;
    bottom: 100%;
    left: 100%;
    background: #ff9900;
    border-radius: 50%;
    transform: translateY(50%);
  }
`

export const Author = styled.span`
  display: block;
  color: #efe0e0;
  padding-top: 7px;
`

export const Box = styled.span`
  background: #363b47;
  margin: 8px;
  box-shadow: 0 2px 10px rgba(30, 31, 36, 0.6);
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease-out;

  &:hover {
    background: #404654;
  }
`
function generateAnimation(one, two) {
  const animationColor = keyframes`
    to {
      background: ${one};
    }

    from {
      background: ${two};
    }
  `
  const animation = css`
    animation: ${animationColor} 5s linear 0s infinite alternate;
  `
  return animation
}

export const BoxHeader = styled.header`
  width: 100%;
  height: 65px;
  background: ${props => props.colorOne};
  position: relative;
  ${props => generateAnimation(props.colorOne, props.colorTwo)}
`
export const ImgContainer = styled.div`
  width: 85px;
  height: 85px;
  padding: 4px;
  background: #363b47;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`

export const BoxContent = styled.header`
  width: 100%;
  padding: 1rem;
  padding-top: 46.5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const Links = styled.div`
  display: flex;
  justify-content: center;
`
