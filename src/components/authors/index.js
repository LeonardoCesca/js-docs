import React from 'react';

import { AuthorsContent, AuthorsBox, AuthorsImage, AuthorsText, AuthorsDescription, AuthorsContentBox, AuthorsGit } from './styles';

export default function Authors(props) {
  return (
    <AuthorsContent>
        <AuthorsBox>
            <AuthorsImage src="https://avatars0.githubusercontent.com/u/22780548?s=460&v=4"></AuthorsImage>
            <AuthorsContentBox>
                <AuthorsText>
                    Leonardo Cesca Flach
                </AuthorsText>
                <AuthorsDescription>
                    teto
                </AuthorsDescription>
            </AuthorsContentBox>
        </AuthorsBox>
        <AuthorsGit>github</AuthorsGit>
    </AuthorsContent>
  )
}
