import React from 'react';

import { FooterContent, FooterText } from './styles';

export default function Footer() {
  return (
    <FooterContent>
      <FooterText>Made with 
        <span aria-label="love" role="img">💖 </span>
        by <a href="https://github.com/LeonardoCesca" rel="noopener noreferrer" target="_blank">Leonardo Cesca</a> and 
        <a href="https://github.com/brunormferreira" rel="noopener noreferrer" target="_blank">Bruno Ramires</a>
      </FooterText>
    </FooterContent>
  )
}
