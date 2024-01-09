import React from 'react'
import { pageLinks } from '../data'

const PageLinks = ({ parentClass, itemClass }) => {
  //   return (
  //     <ul className={parentClass} id="nav-link">
  //       {pageLinks.map((link) => {
  //         return <PageLink key={link.id} link={link} itemClass={itemClass} />
  //       })}
  //     </ul>
  //   )
  return (
    <ul className={parentClass} id="nav-link">
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={itemClass}>
              {link.text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default PageLinks
