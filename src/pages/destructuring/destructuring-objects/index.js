import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';

import { ClipLoader } from "react-spinners";

import { Content, Title, Paragraph, Iframe } from '../../styles';

export default function DestructuringObjects ({data}) {

  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIsLoader(false);
    }, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <Content>
      <Title>
        {data.markdownRemark.frontmatter.destructObj[0].title}
      </Title>
      <Paragraph>
        {data.markdownRemark.frontmatter.destructObj[1].subtitle}
      </Paragraph>
      {isLoader ? (
        <ClipLoader
          size={45}
          color={"#123abc"}
          loading={isLoader}
        />
        ) : (
        <Iframe>
          <iframe 
            title="destructuring objects" 
            src="https://jsfiddle.net/leonardocesca/g76nu4qt/23/embedded/js/"
            onLoad={!isLoader}
            >
          </iframe>
        </Iframe>
        )}
   </Content>
  )
}


export const pageQuery = graphql`
  query DestructObjPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/destructuring.md/" }) {
      frontmatter {
        destructObj {
          title
          subtitle
        }
      }
    }
  }
`
