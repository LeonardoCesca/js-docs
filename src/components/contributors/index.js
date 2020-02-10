import React from "react"

import metadata from "../../../config/metadata"

import generateNumber from "../../utils/generateRandomNumber"

import {
  ContributorsBox,
  ContributorsContainer,
  ContributorsTitle,
  Author,
  Box,
  ImgContainer,
  BoxHeader,
  BoxContent,
  Links,
  ContributorsTitleWrapper,
} from "./styles"

import { FaGithub, FaLinkedin } from "react-icons/fa"

function generateOrangeColor() {
  console.log("asas")
  return `rgb(${generateNumber(200, 255)}, ${generateNumber(
    110,
    190
  )}, ${generateNumber(0, 20)})`
}

const contributors = metadata.contributors.map(
  ({ name, url_git, url_linkedin, url_avatar }, index) => {
    return (
      <Box key={index}>
        <BoxHeader
          colorOne={generateOrangeColor()}
          colorTwo={generateOrangeColor()}
        >
          <ImgContainer>
            <img src={url_avatar} alt="Avatar" />
          </ImgContainer>
        </BoxHeader>
        <BoxContent>
          <Author>{name}</Author>
          <Links>
            <a href={url_git} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href={url_linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </Links>
        </BoxContent>
      </Box>
    )
  }
)

export default function Contribuitors() {
  return (
    <ContributorsBox>
      <ContributorsTitleWrapper>
        <ContributorsTitle>Contribuidores</ContributorsTitle>
      </ContributorsTitleWrapper>
      <ContributorsContainer>{contributors}</ContributorsContainer>
    </ContributorsBox>
  )
}
