import React from "react"

import "./Heading.scss"

type TagNameProps = {
  type: string
  children: React.ReactNode
}

const TagName = ({ type, children }: TagNameProps) => {
  return React.createElement(type, { className: type }, children)
}

type HeadingProps = {
  type?: string
  text: string
}

const Heading = ({ type = 'h1', text }: HeadingProps) => {
  return (
    <TagName type={type}>
      {text}
    </TagName>
  )
}

export default Heading