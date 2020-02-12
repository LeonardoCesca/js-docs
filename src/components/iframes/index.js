import React, { useState } from "react"

import { ClipLoader } from "react-spinners"

import { IframesStyle, Container, Loader } from "./styles"

export default function Iframes({ url, description }) {
  const [isLoader, setIsLoader] = useState(true)

  return (
    <Container>
      {isLoader && (
        <Loader>
          <ClipLoader size={45} color={"#ffa7c4"} loading={isLoader} />
        </Loader>
      )}
      <IframesStyle
        onLoad={() => setIsLoader(false)}
        title={description}
        src={url}
      />
    </Container>
  )
}
