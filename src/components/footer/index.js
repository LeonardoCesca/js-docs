import React from 'react';

import { FooterContent, FooterText } from './styles';

export default function Footer(props) {
  return (
    <FooterContent>
      <FooterText>{props.made} 
        <span aria-label="love" role="img"> 💖 </span>
        by <a href={props.leo_github} rel="noopener noreferrer" target="_blank">{props.leo}</a> & 
        <a href={props.bruno_github} rel="noopener noreferrer" target="_blank">{props.bruno}</a>
      </FooterText>
    </FooterContent>
  )
}
