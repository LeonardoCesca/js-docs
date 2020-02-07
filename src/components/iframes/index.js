import React, { useState } from "react"

import { ClipLoader } from "react-spinners"

import { IframesStyle } from "./styles"

export default function Iframes({ url, description }) {
  const [isLoader, setIsLoader] = useState(true)

  return (
    <>
      <ClipLoader size={45} color={"#ffa7c4"} loading={isLoader} />
      <IframesStyle
        onLoad={() => setIsLoader(false)}
        title={description}
        src={url}
      />
    </>
  )
}
