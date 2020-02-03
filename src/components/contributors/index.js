import React from 'react';

import metadata from '../../../config/metadata';

import { ContributorsBox, ContributorsContainer, Author } from './styles';

const contributors = metadata.contributors.map(({name, url_git, url_avatar}, index) => {
  return (
      <a key={index} href={url_git}>
       <img src={url_avatar} alt="Smiley face" />
       <Author>{name}</Author>
      </a>
  )
})

export default function Contribuitors() {
  return (
      <ContributorsBox>
        <p>Contribuidores</p>
        <ContributorsContainer>
          {contributors}
        </ContributorsContainer>
      </ContributorsBox>
  )
}
