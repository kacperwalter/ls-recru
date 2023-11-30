import React from "react"

import "./Heading.scss"

type TagNameProps = {
  type: string
  children: React.ReactNode
}

type HeadingProps = {
  type?: string
  text: string
}

const TagName = ({ type, children }: TagNameProps) => {
  return React.createElement(type, { className: type }, children)
}

const Heading = ({ type = 'h1', text }: HeadingProps) => {
  return (
    <TagName type={type}>
      {text}
    </TagName>
  )
}

export default Heading