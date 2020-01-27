import React from 'react';

import metadata from '../../../config/metadata';

import { AuthorsContent, AuthorsBox, AuthorsImage, AuthorsText, AuthorsDescription, AuthorsContentBox, AuthorsGit } from './styles';

const authors = metadata.authors.map((author, index) => {
  return (
    <AuthorsContent key={index}>
      <AuthorsBox>
        <AuthorsImage src={author.url_avatar}></AuthorsImage>
        <AuthorsContentBox>
            <AuthorsText>
                {author.name}
            </AuthorsText>
            <AuthorsDescription>
                {author.description}
            </AuthorsDescription>
        </AuthorsContentBox>
      </AuthorsBox>
      <AuthorsGit href={author.url_git}>github</AuthorsGit>
    </AuthorsContent>
  )
})

export default function Authors() {
  return (
    <>
      {authors}
    </>
  )
}
