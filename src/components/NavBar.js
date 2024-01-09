import React from 'react'
import logo from '../images/logo.svg'
import { socialLinks, pageLinks } from '../data'
import PageLink from './PageLink'
import SocialLinks from './SocialLinks'

const NavBar = (props) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            // const { id, href, text } = link
            return <PageLink key={link.id} itemClass="nav-link" />
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLinks key={link.id} {...link} itemClass="nav-icon" />
          })}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
