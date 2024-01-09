import React from 'react'

const PageLink = ({ href, text }) => {
  return (
    <li>
      <a href={href}>{text}</a>
    </li>
  )
}

export default PageLink
