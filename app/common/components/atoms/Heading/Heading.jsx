import React from "react"

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