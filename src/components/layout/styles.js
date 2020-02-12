import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const TitleMenu = styled.h1`
  font-weight: bold;
  font-size: 17px;
  border-bottom: 1px solid;
  border-top: 1px solid;
  border-color: #ff9900;
  padding: 10px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 0;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 37px;
  }
`
export const ContainerMenu = styled.aside`
  top: 0;
  bottom: 0;
  position: fixed;
  z-index: 30;
  background: #282c35;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-right: 2px solid #ff9900;
  transition: all 0.2s ease-in-out;

  & a {
    text-decoration: none;
    width: 100%;
    display: flex;
    justify-content: center;
    letter-spacing: 0.1em;
    text-decoration: none;
    margin-bottom: 10px;
  }

  &.opened {
    transform: translateX(0%);
  }

  &.closed {
    transform: translateX(-100%);
  }

  @media screen and (max-width: 438px) {
    top: 0;
    left: 0;
    right: 0;
    border: none;
  }
`

export const ContentHeader = styled.div`
  padding-bottom: 0;
`
export const ContentHeaderHamburger = styled.div`
  height: 34px;
  width: 34px;

  @media screen and (max-width: 438px) {
    margin: 0;
  }
`
export const ContentMenu = styled.div`
  overflow-y: auto;
  flex: 1;
  padding: 1rem 60px;

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
`
export const MenuHamburgerWrapper = styled.div`
  width: 64px;
  height: 100%;

  @media (max-width: 438px) {
    width: 100%;
    height: 64px;
  }
`

export const ContainerHamburguer = styled.header`
  border-right: 2px solid rgba(255, 255, 255, 0.28);
  background-color: #282c35;
  width: 52px;
  display: flex;
  justify-content: center;
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 1rem 6px;

  @media (max-width: 438px) {
    height: 64px;
    width: 100%;
    justify-content: start;
    align-items: center;
    padding: 6px 1rem;
    border-bottom: 2px solid rgba(255, 255, 255, 0.28);
    border-right: none;
  }
`
export const HamburgerWrapper = styled.div`
  position: fixed;
  top: 1rem;
  left: 12px;
  z-index: 50;
`

export const Hamburger = styled.div`
  width: 24px;
  height: 18px;
  cursor: pointer;
  position: relative;

  &::after,
  &::before {
    width: 100%;
    transition: all 0.2s ease-in-out;
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    left: 50%;
  }

  &.opened {
    &::after,
    &::before {
      top: 50%;
      background: #ff9900;
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  &.closed {
    &::after,
    &::before {
      transform: translate(-50%, -50%);
      background: #64676d;
    }

    &::after {
      top: 5%;
    }

    &::before {
      top: 95%;
    }
  }
`

export const HamburgerLine = styled.div`
  background: white;
  position: absolute;
  width: 100%;
  height: 2px;
  left: 50%;
  top: 50%;
  transition: all 0.2s ease-in-out;
  background: #64676d;

  &.opened {
    transform: translate(100%, 50%);
    opacity: 0;
    visibility: hidden;
  }

  &.closed {
    transform: translate(-50%, -50%);
    opacity: 1;
    visibility: visible;
  }
`

export const ContainerLink = styled.div`
  text-align: center;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;

  @media (max-width: 438px) {
    flex-direction: column;
  }
`

export const ContainerContent = styled.div``

export const StyledLink = styled(props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "#ff9900" : "",
        },
      }
    }}
  />
))`
  width: 0;
  color: #ffffff;
  text-decoration: none;
  white-space: nowrap;

  &:active {
    color: gray;
  }

  &:hover {
    color: #ff9900;
  }
`

export const MenuItems = styled.div``
