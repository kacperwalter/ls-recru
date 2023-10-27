import React from "react"

import "./Heading.scss"

const TagName = ({ type, children }) => {
  return React.createElement(type, { className: type }, children)
}

const Heading = ({ type = 'h1', text }) => {
  return (
    <TagName type={type}>
      {text}
    </TagName>
  )
}

export default Heading