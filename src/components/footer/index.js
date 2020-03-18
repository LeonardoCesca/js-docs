import React from 'react';

import metadata from '../../../config/metadata';

import { FooterContent, FooterText } from './styles';

const socials = metadata.social.map(({name, url}, index) => {
  return (
    <a key={index} href={url} rel="noopener noreferrer" target="_blank">{name}</a>
  )
})

export default function Footer(props) {
  return (
    <FooterContent>
      <FooterText>{props.made} 
        <span aria-label="love" role="img"> 💖 </span>
        by {socials}
      </FooterText>
    </FooterContent>
  )
}
