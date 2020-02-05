import React, { useState, useEffect } from "react"

import { ClipLoader } from "react-spinners"

import { IframesStyle } from "./styles"

export default function Iframes({ url, description }) {
  const [isLoader, setIsLoader] = useState(true)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIsLoader(false)
    }, 1000)
    return () => {
      window.clearInterval(timer)
    }
  }, [])

  return (
    <>
      {isLoader ? (
        <ClipLoader size={45} color={"#ffa7c4"} loading={isLoader} />
      ) : (
        <IframesStyle title={description} src={url} />
      )}
    </>
  )
}
