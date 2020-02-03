import React from 'react';

import metadata from '../../../config/metadata';

import { ContributorsBox, ContributorsContainer, ContributorsTitle, Author, Box, Links } from './styles';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const contributors = metadata.contributors.map(({name, url_git, url_linkedin, url_avatar}, index) => {
  return (
    <Box key={index}>
        <img src={url_avatar} alt="Smiley face" />
        <Links>
          <a href={url_git}>
            <FaGithub />
          </a>
          <a href={url_linkedin}>
            <FaLinkedin />
          </a>
        </Links>
      <Author>{name}</Author>
    </Box>
  )
})

export default function Contribuitors() {
  return (
      <ContributorsBox>
        <ContributorsTitle>Contribuidores</ContributorsTitle>
        <ContributorsContainer>
          {contributors}
        </ContributorsContainer>
      </ContributorsBox>
  )
}
